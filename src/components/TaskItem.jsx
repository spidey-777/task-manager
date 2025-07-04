import { useState } from "react";
import { toggleTaskCompletion } from "../utils/localStorage";

function TaskItem({ id, title, description, isCompleted, createdAt, handleRemove}) {
  const [open, setOpen] = useState(false);
  const [toggle,setToggle] = useState(isCompleted)

  const handleToggleTask = () => {
    toggleTaskCompletion(id);
    setToggle(!toggle);
    
  };

  const handleRemoveTask = () => {
    handleRemove(id);
  };

  return (
    <div className="mx-4 sm:mx-16 my-4 p-4 bg-white rounded-lg shadow-md transition duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center font-semibold gap-2 cursor-pointer text-left"
        >
          <span>{open ? "▲" : "▼"}</span>
          <span className="break-all">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={toggle}
            onChange={handleToggleTask}
            className="w-5 h-5 cursor-pointer accent-blue-600"
          />
          <button
            onClick={handleRemoveTask}
            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-3 bg-gray-100 p-3 rounded-md text-sm text-gray-800">
          <p>
            <span className="font-medium">Description:</span> {description}
          </p>
          <p className="mt-1">
            <span className="font-medium">Created At:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
