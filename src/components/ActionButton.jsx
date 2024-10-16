// ActionButtons.jsx
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button>
        <ViewListIcon />
      </button>
      <button>
        <ViewModuleIcon />
      </button>
      <button>
        <FilterListIcon />
        Filter
      </button>
    </div>
  );
};

export default ActionButtons;
