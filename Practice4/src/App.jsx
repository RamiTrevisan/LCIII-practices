import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Tareas a hacer</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
