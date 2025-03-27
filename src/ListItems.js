import React, { useState } from "react";
import { Link } from "react-router-dom";

function ListItems({ items, onDelete }) {
  const [filterStatus, setFilterStatus] = useState("All");

  // Corrected filter logic
  const filteredItems = items.filter(item => {
    return (
      filterStatus === "All" ||
      (filterStatus === "Completed" && item.status) ||
      (filterStatus === "Incomplete" && !item.status)
    );
  });

  return (
    <div>
      {/* Filter Dropdown */}
      <div className="mb-2 mt-2 col-3">
        <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-responsive mt-4">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status ? "Completed" : "Incomplete"}</td>
                <td>
                  <Link className="btn btn-warning btn-sm me-2" to={`/edit/${item.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListItems;
