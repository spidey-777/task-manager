import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addTask } from "../utils/localStorage";
function TaskForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: title,
      description: description,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    addTask(newTask);
    setDescription("");
    setTitle("");
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="write Title"
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="write Description"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
