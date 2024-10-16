// Sidebar.jsx
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ChatIcon from "@mui/icons-material/Chat";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SettingsIcon from "@mui/icons-material/Settings";
import profileicon from "../assets/images/anna.png";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src={profileicon} alt="Anna George" />
        <div className="profile-info">
          <h2>Anna George</h2>
          <p>Customer Operations</p>
        </div>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <button>
              <DashboardIcon /> <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button>
              {" "}
              <AssignmentIcon /> <span>Task</span>
            </button>
          </li>
          <li>
            <button>
              {" "}
              <PeopleIcon /> <span>Customers</span>
            </button>
          </li>
          <li>
            <button>
              <UpgradeIcon /> <span>Account Upgrade</span>
              <ArrowDropDown />
            </button>
          </li>
          <li>
            <button>
              <ChatIcon /> <span>Chats</span>
            </button>
          </li>
          <li>
            <button>
              <ReportProblemIcon /> <span>Disputes</span>
            </button>
          </li>
          <li className="settings">
            <button>
              <SettingsIcon /> <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
