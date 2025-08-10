const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const register = async(req, res) => {
  try{
    const { firstname, lastname, email, password } = req.body;
  const newUser = new user({firstname, lastname, email, password}); 
  await newUser.save();
  res.status(200).json({'msg': 'user created successfully'})

  } catch (error) {
    console.error(error)
    res.json({"error": "failed to register"});
  }
  

}

const login = async (req, res) => {
  try{
    const { email, password }  = req.body;
    const useremail = await user.findOne({email});

    if (!useremail) {
      return { message: 'User not found'}
    }

    const isMatch = await bcrypt.compare(password, useremail.password);
    if(!isMatch){
      return res.status(404).json({ 'message': 'invalid password'})
    }


    //jwt
     const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    // save refresh token to DB 
    user.refreshToken = refreshToken;
    await user.save();

    // set cookies
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000, 
      path: '/',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, 
      path: '/',
    });

   
    return res.json({ message: 'Login successful', user: { id: user._id, email: user.email } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Login failed' });
  }
};

// REFRESH: rotate refresh token and return new tokens
const refresh = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.sendStatus(401);

    // verify refresh token
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.sendStatus(403); 
    }

    const user = await User.findById(payload.id);
    if (!user || user.refreshToken !== token) {
      // refresh token not recognized 
      return res.sendStatus(403);
    }

    // rotate: issue new refresh token and new access token
    const newAccessToken = createAccessToken(user._id);
    const newRefreshToken = createRefreshToken(user._id);

    // persist new refresh token
    user.refreshToken = newRefreshToken;
    await user.save();

    // set cookies (overwrites old ones)
    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000,
      path: '/',
    });

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    });

    return res.json({ message: 'Token refreshed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Refresh failed' });
  }
};

// LOGOUT: clear cookies and remove refresh token 
const logout = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (token) {
      // decode to find user id 
      const payload = jwt.decode(token);
      if (payload?.id) {
        await User.findByIdAndUpdate(payload.id, { $unset: { refreshToken: "" } });
      }
    }

    // clear cookies client-side
    res.clearCookie('accessToken', { path: '/' });
    res.clearCookie('refreshToken', { path: '/' });

    return res.json({ message: 'Logged out' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Logout failed' });
  }
};

module.exports = { register, login, refresh, logout };