
import { useState } from "react";

function AddTask({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva Tarea"
      />
      <button type="submit" >Agregar</button>
    </form>
  );
}

export default AddTask;
