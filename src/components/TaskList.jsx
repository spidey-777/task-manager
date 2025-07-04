import { useState } from "react";
import { getTask } from "../utils/localStorage";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";

function TaskList() {
  const [filter, setFilter] = useState();
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const tasks = getTask();
  let filteredTasks = tasks;
  if (tasks.length === 0) {
    return (
      <div>
        <h3>
          please add tasks{" "}
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
              add task
            </button>
          </Link>
        </h3>
      </div>
    );
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.isCompleted === true);
  } else if (filter === "pending") {
    filteredTasks = tasks.filter((task) => task.isCompleted === false);
  }
  const totalTask = filteredTasks.length;

  return (
    <div>
      <div
        style={{
          padding: "0.5rem",
          border: "none",
          cursor: "pointer",
          gap: "10px",
          display: "flex",
          alignItems: "center",
          marginLeft: "5rem",
          justifyContent: "space-between",
          marginRight: "5rem",
        }}
      >
        <form onChange={handleChange}>
          <label>
            <input type="radio" name="tasks" value="all" defaultChecked />
            All
          </label>
          <label>
            <input type="radio" name="tasks" value="completed" />
            Complated
          </label>
          <label>
            <input type="radio" name="tasks" value="pending" />
            Pending
          </label>
        </form>
        <h3>total task: {totalTask}</h3>
      </div>
      {totalTask > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} {...task} />)
      ) : (
        <h1>You have no {filter} tasks</h1>
      )}
    </div>
  );
}

export default TaskList;
