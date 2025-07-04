import { useState } from "react";
import {  toggleTaskCompletion } from "../utils/localStorage";

function TaskItem({ id,title, description, isCompleted,createdAt,onRemove }) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    toggleTaskCompletion(id);
  };
  const handleRemove = () => {
    onRemove(id);
  }

  return (
    <div
      style={{
        margin: "1rem 8rem",
        padding: "1rem",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "background 0.3s",
      }}
    >
      <div style={{
        display:'flex',
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div
          onClick={() => setOpen((prev) => !prev)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "left",
          }}
        >
          <span>{open ? "▲" : "▼"}</span>
          <span>{title}</span>
        </div>
        <div>
          <input
            type="checkbox"
            name="isCompleted"
            id="isCompleted"
            value={isCompleted}
            style={{ cursor: "pointer",scale: "1.5" }}
            onChange={handleToggle}
          />
          <button 
          onClick={handleRemove}
          style={{
            marginLeft: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>delete</button>
        </div>
      </div>
      {open && (
        <div
          style={{
            marginTop: "0.25rem",
            backgroundColor: "#eeeeee",
            padding: "0.25rem",
            borderRadius: "6px",
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          <div style={{paddingLeft:'1rem'}}>

          <p >description : {description} </p>
          <p >Created At: {createdAt} </p>

          </div>
          
        </div>
      )}
    </div>
  );
}

export default TaskItem;
