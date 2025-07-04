import { useState, useEffect } from "react";
import { getTask, removeTask } from "../utils/localStorage";
import TaskItem from "./TaskItem";

function TaskList({refresh}) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
  setTasks(getTask());
}, [refresh]);
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
      <div className="text-center mt-10">
        <h3 className="text-lg font-medium mb-4">
          Please add tasks
        </h3>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-20 py-6 ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 ml-20">
        <form onChange={handleChange} className="flex gap-4 text-sm sm:text-base">
          <label className="flex items-center gap-1">
            <input type="radio" name="tasks" value="all" defaultChecked />
            All
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="tasks" value="completed" />
            Completed
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="tasks" value="pending" />
            Pending
          </label>
        </form>
        <h3 className="text-md font-semibold mr-20">Total Tasks: {totalTask}</h3>
      </div>

      {totalTask > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} handleRemove={handleRemove}  />
        ))
      ) : (
        <h1 className="text-xl text-center mt-10">You have no {filter} tasks</h1>
      )}
    </div>
  );
}

export default TaskList;
