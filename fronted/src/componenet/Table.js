import React from 'react';
import "./table.css"

const Table = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.id}>
            <td>{item.ProductName}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
