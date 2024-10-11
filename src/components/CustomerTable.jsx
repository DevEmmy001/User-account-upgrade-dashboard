// CustomerTable.jsx
import React from "react";
import CustomerRow from "./CustomerRow"; // Import the CustomerRow component

const CustomerTable = ({ customers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Account Tier</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <CustomerRow key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
