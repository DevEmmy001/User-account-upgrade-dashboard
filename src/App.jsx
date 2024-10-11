// App.jsx
import React from "react";
import Sidebar from "./components/SideBar";
import Tabs from "./components/Tabs";
import SearchBar from "./components/SearchBar";
import CustomerTable from "./components/CustomerTable";
// import Pagination from "./components/Pagination";
import ActionButtons from "./components/ActionButton";
// Dummy data for customers
const customers = [
  {
    id: 1,
    name: "Tomiwa Oyeledu",
    email: "tomiwa@mymail.com",
    avatar: "url",
    phone: "+2349034526771",
    tier: "Tier 1",
    time: "5 mins ago",
  },
  // More customer objects...
];

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Tabs />
        <SearchBar />
        <ActionButtons />
        <CustomerTable customers={customers} />
        {/* <Pagination /> */}
      </main>
    </div>
  );
};

export default App;
