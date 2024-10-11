// SearchBar.jsx
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search customers" />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
