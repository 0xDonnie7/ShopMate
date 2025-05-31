import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { validateLogin, type LoginData, type LoginErrors } from "../utils/SignupAndLoginValidation";

const Login = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState<LoginErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateLogin(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit form data
            console.log("Form submitted", formData);
        }
    };

    return (
        <form className="py-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-md font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className="mx-2 ">Remember me</label>
            </div>
            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 500 }}
                className="w-full bg-blue-500 text-white p-2 rounded mt-2"
            >
                Login</motion.button>
            <div className="w-full text-center mt-4 text-sm">
                <a href="/forgot-password" className="hover:underline hover:text-blue-600">Forgot password?</a>
                <span> | </span>
                <Link to="/auth/signup" className="hover:underline hover:text-blue-600">Don't have an account? Sign up</Link>
            </div>
        </form>
    )
}

export default Login;