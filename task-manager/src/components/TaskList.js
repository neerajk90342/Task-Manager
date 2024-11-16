import React, { useState } from "react";

const TaskList = ({ tasks, deleteTask, toggleComplete, setPriority }) => {
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-list">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      {filteredTasks.map((task, index) => (
        <div key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span>{task.title}</span>
          </div>
          <div>
            <select
              value={task.priority}
              onChange={(e) => setPriority(index, e.target.value)}
              className="priority-dropdown"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button onClick={() => deleteTask(index)} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
