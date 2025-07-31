import { Outlet } from "react-router-dom";
import NavBar from "../components/MainNavigation";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div className="text-lg max-sm:text-xs max-lg:text-base lg:text-xl">
            <NavBar />
            <div className="w-3/4 mx-auto mt-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout;