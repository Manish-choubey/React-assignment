import React, { useState, useEffect } from "react";

import Table from "../../componenet/Table";
import Input from "../../componenet/Input";
import "./dashBoard.css";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setTableData(parsedData);
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    const parsedData = storedData ? JSON.parse(storedData) : [];

    const filteredData = parsedData.filter((item) =>
      item.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setTableData(filteredData);
  }, [searchQuery]);

  return (
    <div className="main-container">
      <div className="search-container">
        <Input
          type="text"
          placeholder="Search Product Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Table tableData={tableData} />
    </div>
  );
};

export default DashboardPage;
