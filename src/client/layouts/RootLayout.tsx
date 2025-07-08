import { Outlet } from "react-router-dom";
import NavBar from "../components/MainNavigation";

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <div className="max-w-7xl mx-auto mt-4">
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout;