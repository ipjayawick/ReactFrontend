import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddTaskDialog = ({ open, onClose, task, setTask, onSubmit }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <form onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        label="Title"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Assignee"
                        value={task.assignee}
                        onChange={(e) => setTask({ ...task, assignee: e.target.value })}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={task.status}
                            label="Status"
                            onChange={(e) => setTask({ ...task, status: e.target.value })}
                        >
                            <MenuItem value="TODO">To Do</MenuItem>
                            <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                            <MenuItem value="DONE">Done</MenuItem>
                        </Select>
                    </FormControl>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Add</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTaskDialog;
