// CustomerRow.jsx
import React from "react";

const CustomerRow = ({ customer }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img src={customer.avatar} alt={customer.name} /> {customer.name}
      </td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.tier}</td>
      <td>{customer.time}</td>
    </tr>
  );
};

export default CustomerRow;
