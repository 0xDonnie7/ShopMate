import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="w-3/4 mx-auto flex items-center gap-9">
                <li className="flex-none text-2xl font-bold tracking-wide text-white hover:text-blue-400 transition-colors font-poetsen"><Link to="/">SHOPMATE</Link></li>
                <li className="flex-none font-kanit"><Link to="/products">Products</Link></li>
                <li className="flex-none font-kanit"><Link to="/categories">Categories</Link></li>

                <li className="flex-1">
                    <form className="flex items-center w-full">
                        <input type="search" placeholder="Search..." className="p-2 rounded-l bg-gray-700 w-full" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Search</button>
                    </form>
                </li>

                <li className="flex-none font-kanit"><Link to="/cart">Cart</Link></li>
                <li className="flex-none font-kanit"><Link to="/auth/login">Login</Link></li>
            </ul>

        </nav>
    )
}

export default NavBar;