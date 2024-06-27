import Header1 from "./Header1";
import { Outlet } from "react-router-dom";

export default function Layout()
{
    return(
        <main>
            <Header1 />
            <Outlet />
        </main>
    );
}