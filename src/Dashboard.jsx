import React from "react";
import { Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import { getUserName } from "./utils/localStorage";

function Dashboard() {
  const userName = getUserName();
  if (!userName) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Please login to see tasks</h1>
        <Link to="/login">
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <h1>Tasks</h1>
        <Link to="/addtask">
          <button
            style={{
              padding: "0.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            add Task
          </button>
        </Link>
      </div>
      <TaskList />
    </div>
  );
}

export default Dashboard;
