import React, { useState } from "react";
import "./Tasks.css";

const SearchFilter = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = tasks.filter(
      (task) =>
        task.description.toLowerCase().includes(query) ||
        task.assignee.toLowerCase().includes(query) ||
        task.status.toLowerCase().includes(query) ||
        task.deadline.includes(query)
    );
    setFilteredTasks(filtered);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
