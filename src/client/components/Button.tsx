type ButtonProps = {
    title: string;
};

const Button = ({ title }: ButtonProps) => {
    return (
        <button className="mt-8 p-4 font-bold bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300">
            {title}
        </button>
    )
}

export default Button;