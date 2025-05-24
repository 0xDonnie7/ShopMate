import { Outlet } from "react-router-dom";
import NavBar from "../components/MainNavigation";

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootLayout;