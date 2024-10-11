// CustomerRow.jsx
import React from "react";
import avatarimg from "../assets/images/anna.png";

const CustomerRow = ({ customer }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td className="customer-td">
        <img src={avatarimg} alt={customer.name} /> {customer.name}
      </td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.tier}</td>
      <td>{customer.time}</td>
    </tr>
  );
};

export default CustomerRow;
