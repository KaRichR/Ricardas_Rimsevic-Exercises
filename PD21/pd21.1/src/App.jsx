import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleStatusChange = (selectedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task === selectedTask) {
        return {
          ...task,
          status: task.status === 'To do' ? 'In Progress' : task.status === 'In Progress' ? 'Done' : 'To do'
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (selectedTask, newName) => {
    const updatedTasks = tasks.map(task => {
      if (task === selectedTask) {
        return {
          ...task,
          name: newName
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (selectedTask) => {
    const updatedTasks = tasks.filter(task => task !== selectedTask);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <h2>Task List</h2>
        <TaskList
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </div>
      <div className="right-panel">
        <h2>Add Task</h2>
        <TaskForm onAdd={handleAddTask} />
      </div>
    </div>
  );
};

export default App;
