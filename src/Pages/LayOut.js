import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function LayOut() {

    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    )

}

export default LayOut