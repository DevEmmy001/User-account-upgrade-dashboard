// Sidebar.jsx
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ChatIcon from "@mui/icons-material/Chat";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="profile_image_url" alt="Anna George" />
        <h2>Anna George</h2>
        <p>Customer Operations</p>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <DashboardIcon /> Dashboard
          </li>
          <li>
            <AssignmentIcon /> Task
          </li>
          <li>
            <PeopleIcon /> Customers
          </li>
          <li>
            <UpgradeIcon /> Account Upgrade
          </li>
          <li>
            <ChatIcon /> Chats
          </li>
          <li>
            <ReportProblemIcon /> Disputes
          </li>
          <li>
            <SettingsIcon /> Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
