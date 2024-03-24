import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({ task, onStatusChange, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleStatusChange = () => {
    onStatusChange(task);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(task, editedName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div className="task" style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      {isEditing ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextField
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <Button variant="contained" onClick={handleSaveEdit}>Save</Button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>{task.name}</h3>
            <p>Priority: {task.priority}</p>
          </div>
          <div>
            <Button variant="contained" onClick={handleStatusChange}>
              {task.status === 'To do' ? 'In Progress' : task.status === 'In Progress' ? 'Done' : 'To do'}
            </Button>
            <Button variant="contained" onClick={handleEdit} style={{ marginLeft: '5px' }}><EditIcon /></Button>
            <Button variant="contained" onClick={handleDelete} style={{ marginLeft: '5px' }}><DeleteIcon /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
