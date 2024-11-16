import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      addTask({ title, completed: false, priority: "Medium" });
      setTitle("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
        className="input-field"
      />
      <button onClick={handleAdd} className="add-button">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
