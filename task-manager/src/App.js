import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  const toggleComplete = (index) =>
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );

  const setPriority = (index, priority) =>
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, priority } : task
      )
    );

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setPriority={setPriority}
      />
    </div>
  );
};

export default App;
