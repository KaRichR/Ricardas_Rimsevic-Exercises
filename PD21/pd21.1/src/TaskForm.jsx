import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAdd({ name: taskName, priority, status: 'To do' });
    setTaskName('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        variant="outlined"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <FormControl variant="outlined">
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          label="Priority"
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">Add Task</Button>
    </form>
  );
};

export default TaskForm;
