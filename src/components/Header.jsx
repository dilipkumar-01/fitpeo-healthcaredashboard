import React from "react";
import "../styles/Header.css";
import avatar from "../assets/avatar.jpg";
import { Bell, Plus, Search } from "lucide-react";

const Header = () => (
    <header className="header">

        <div className="header-left">
            <div className="search-wrapper">
                <Search className="search-icon" size={16} />
                <input className="search-bar" placeholder="Search..." disabled />
            </div>
            <Bell className="icon bell-icon" color="#0a2176" fill="#0a2176;" strokeWidth={2.75} size={20} />
        </div>


        <div className="header-right">
            <img src={avatar} alt="User Avatar" className="avatar" />
            <button className="add-btn">
                <Plus size={18} />
            </button>
        </div>
    </header>
);

export default Header;
