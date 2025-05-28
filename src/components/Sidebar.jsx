import React from "react";
import { navLinks1, navLinks2 } from "../data/navigationLinks";
import "../styles/Sidebar.css";

const SidebarSection = ({ title, links }) => (
    <div className="sidebar-section">
        {title && (
            <div className="nav-link title-link">
                <span className="icon-placeholder" />
                <span className="label-title">{title}</span>
            </div>
        )}
        <nav>
            <ul>
                {links.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                        <li key={link.label || idx} className="nav-link">
                            <span className="icon">{Icon && <Icon size={16} />}</span>
                            <span className="label">{link.label}</span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </div>
);

const Sidebar = () => {
    const settingLink = navLinks2.find(link => link.label === "Setting");
    const otherLinks = navLinks2.filter(link => link.label !== "Setting");

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <span> <h1 className="logo">care.</h1></span>
                <SidebarSection title="General" links={navLinks1} />
                <SidebarSection title="Tools" links={otherLinks} />
            </div>
            <div className="sidebar-bottom">
                <SidebarSection title="" links={[settingLink]} />
            </div>
        </aside>
    );
};

export default Sidebar;
