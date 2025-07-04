import { useState, useEffect } from "react";
import { getTask, removeTask } from "../utils/localStorage";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTasks(getTask());
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleRemove = (id) => {
    removeTask(id);
    setTasks(getTask());
  };

  let filteredTasks = tasks;

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.isCompleted === true);
  } else if (filter === "pending") {
    filteredTasks = tasks.filter((task) => task.isCompleted === false);
  }

  const totalTask = filteredTasks.length;

  if (tasks.length === 0) {
    return (
      <div>
        <h3>
          Please add tasks{" "}
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
              Add Task
            </button>
          </Link>
        </h3>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          padding: "0.5rem",
          gap: "10px",
          display: "flex",
          alignItems: "center",
          margin: "0 5rem",
          justifyContent: "space-between",
        }}
      >
        <form onChange={handleChange}>
          <label>
            <input type="radio" name="tasks" value="all" defaultChecked />
            All
          </label>
          <label>
            <input type="radio" name="tasks" value="completed" />
            Completed
          </label>
          <label>
            <input type="radio" name="tasks" value="pending" />
            Pending
          </label>
        </form>
        <h3>Total task: {totalTask}</h3>
      </div>

      {totalTask > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} onRemove={handleRemove} />
        ))
      ) : (
        <h1>You have no {filter} tasks</h1>
      )}
    </div>
  );
}

export default TaskList;
