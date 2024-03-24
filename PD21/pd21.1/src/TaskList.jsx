import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onStatusChange, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
