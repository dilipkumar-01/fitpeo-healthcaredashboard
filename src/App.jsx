import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import Sidebar from "./components/Sidebar";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content-sections">
                    <MiddleSection />
                    <RightSection />
                </div>
            </div>
        </div>
    );
}

export default App;