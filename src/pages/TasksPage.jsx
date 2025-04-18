import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TasksPage = () => {
    // const [tasks, setTasks] = useState([]);
    const tasks = [
        { id: 1, title: 'Complete the project', description: 'Finish the backend and frontend implementations', status: 'TODO', assignee: 'john.doe@example.com', createdAt: '2025-04-18T10:15:30', updatedAt: '2025-04-18T10:15:30' },
        { id: 2, title: 'Write tests', description: 'Add unit and integration tests for the task service', status: 'IN_PROGRESS', assignee: 'jane.doe@example.com', createdAt: '2025-04-19T11:00:00', updatedAt: '2025-04-19T12:00:00' },
    ]
    const [openDialog, setOpenDialog] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // useEffect(() => {
    //     // Fetch tasks from your API (replace with actual fetch logic)
    //     fetchTasks();
    // }, []);

    // const fetchTasks = () => {
    //     // Replace this with your API call to fetch tasks
    //     setTasks([
    //         { id: 1, title: 'Complete the project', status: 'TODO', assignee: 'john.doe@example.com', createdAt: '2025-04-18T10:15:30', updatedAt: '2025-04-18T10:15:30' },
    //         { id: 2, title: 'Write tests', status: 'IN_PROGRESS', assignee: 'jane.doe@example.com', createdAt: '2025-04-19T11:00:00', updatedAt: '2025-04-19T12:00:00' },
    //     ]);
    // };

    const handleOpenDialog = (task) => {
        // console.log(task)
        setCurrentTask(task || { title: '', description: '', status: 'TODO', assignee: '' });
        console.log(currentTask)
        // setIsEditing(!!task);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSubmitTask = (e) => {
        e.preventDefault();
        // Handle task submission (add or update logic here)
        setOpenDialog(false);
        fetchTasks(); // Refresh task list after submission
    };

    const handleLogout = () => {
        // Logic for logging out the user
        history.push('/login');
    };

    const handleDeleteTask = (taskId) => {
        // Handle task deletion (replace with actual delete logic)
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            {/* Navbar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Task Manager
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>

            <Container>
                {/* Tasks Table */}
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => handleOpenDialog()}>
                    Add Task
                </Button>

                <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Assignee</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.title}</TableCell>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell>{task.status}</TableCell>
                                    <TableCell>{task.assignee}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="secondary" onClick={() => handleOpenDialog(task)}>Edit</Button>
                                        <Button variant="contained" color="error" sx={{ marginLeft: 1 }} onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Dialog for Adding/Editing Task */}
                {currentTask && (
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>{isEditing ? 'Edit Task' : 'Add Task'}</DialogTitle>
                        <DialogContent>
                            <form onSubmit={handleSubmitTask}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    value={currentTask.title}
                                    onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
                                    required
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Description"
                                    value={currentTask.description}
                                    onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                                    required
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Assignee"
                                    value={currentTask.assignee}
                                    onChange={(e) => setCurrentTask({ ...currentTask, assignee: e.target.value })}
                                    required
                                    sx={{ marginBottom: 2 }}
                                />
                                <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                                    <InputLabel>Status</InputLabel>
                                    <Select
                                        value={currentTask.status}
                                        label="Status"
                                        onChange={(e) => setCurrentTask({ ...currentTask, status: e.target.value })}
                                    >
                                        <MenuItem value="TODO">To Do</MenuItem>
                                        <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                                        <MenuItem value="DONE">Done</MenuItem>
                                    </Select>
                                </FormControl>
                                <DialogActions>
                                    <Button onClick={handleCloseDialog}>Cancel</Button>
                                    <Button type="submit" variant="contained" color="primary">
                                        {isEditing ? 'Update' : 'Add'}
                                    </Button>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </Dialog>
                )}
            </Container>
        </div>
    );
};

export default TasksPage;
