import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import App from "./App/components/App";
import User from "./User";

const MainRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </Router>
        </div>
    );
}

export default MainRoutes;
