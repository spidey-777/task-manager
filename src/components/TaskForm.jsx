import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addTask } from "../utils/localStorage";

function TaskForm({ onSubmitSuccess,setShowForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title,
      description,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    if (onSubmitSuccess) onSubmitSuccess();
    setShowForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold text-center mb-4">Create a New Task</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block font-semibold mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Task
      </button>
    </form>
  );
}

export default TaskForm;
