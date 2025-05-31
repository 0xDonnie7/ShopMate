import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from 'framer-motion';
import { validateSignup, type SignupData, type ValidationErrors } from "../utils/SignupAndLoginValidation";

const Signup = () => {
    const [formData, setFormData] = useState<SignupData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<ValidationErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateSignup(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit form data
            console.log("Form submitted", formData);
        }
    };
    return (
        <>
            <form className="py-4" onSubmit={handleSubmit}>
                <div className="flex mb-4 justify-between gap-5">
                    <div className="w-2/3">
                        <label htmlFor="firstName" className="block text-md font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="w-2/3">
                        <label htmlFor="lastName" className="block text-md font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                </div>
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
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    className="w-full bg-blue-500 text-white p-2 rounded mt-2"

                >
                    Signup
                </motion.button>
                <div className="w-full text-center mt-4 text-sm">
                    <span>Already have an account? </span>
                    <Link to="/auth/login" className="hover:underline hover:text-blue-600">Login</Link>
                </div>
            </form>
        </>
    )
}

export default Signup;