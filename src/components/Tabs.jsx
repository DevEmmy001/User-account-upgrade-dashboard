// Tabs.jsx
import React from "react";

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tab- active">
        Pending <span className="tab-span">1500</span>
      </button>
      <button className="tab">
        Cancelled <span className="tab-span">150</span>
      </button>
    </div>
  );
};

export default Tabs;
