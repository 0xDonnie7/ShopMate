import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
    id: number;
    title: string;
    description: string;
    action: string;
};

const slides: Slide[] = [
    {
        id: 1,
        title: "Welcome to ShopMate",
        description: "An online shopping app that accepts crypto payments.",
        action: "Shop Now",
    },
    {
        id: 2,
        title: "Fast Delivery",
        description: "Get your orders delivered to your doorstep quickly.",
        action: "Track Orders",
    },
    {
        id: 3,
        title: "Join Our Community",
        description: "Sign up and enjoy exclusive member deals.",
        action: "Sign Up",
    },
];

const Home = () => {
    const [index, setIndex] = useState(0);

    // Auto change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleManualChange = (i: number) => {
        setIndex(i);
    };

    const current = slides[index];

    return (
        <div className="w-full max-w-7xl mx-auto mt-10 p-6 bg-gray-600 rounded-xl shadow-md relative transition-all duration-500">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 py-4"
                >
                    <h2 className="text-2xl font-bold mb-2 text-white">{current.title}</h2>
                    <p className="mb-4 text-white">{current.description}</p>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded hover:bg-gray-400 transition-colors duration-300">
                        {current.action}
                    </button>
                </motion.div>
            </AnimatePresence>

            {/* Circle buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleManualChange(i)}
                        className={`w-3 h-3 rounded-full border ${index === i ? "bg-gray-800 border-gray-600" : "bg-white border-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
