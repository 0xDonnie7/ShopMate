type ButtonProps = {
    title: string;
    className?: string;
};

const Button = ({ title, className }: ButtonProps) => {
    return (
        <button className={`p-4 font-bold bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300 ${className}`}>
            {title}
        </button>
    )
}

export default Button;