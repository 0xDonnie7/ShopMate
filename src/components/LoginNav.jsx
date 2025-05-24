const LoginNav = () => {
    return (
        <nav>
            <ul className="w-full flex justify-around gap-4">
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? "link active" : "link"}
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) => isActive ? "link active" : "link"}
                    >
                        Signup
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default LoginNav;