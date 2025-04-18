import React, { useEffect, useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, Container,
    Table, TableBody, TableCell, TableHead, TableRow,
    Paper, IconButton, TextField, MenuItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddTaskDialog from '../components/AddTasksDialog';
import EditTaskDialog from '../components/EditTasksDialog';
import {
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    fetchFilteredTasks
} from '../api/axios'

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const [statusFilter, setStatusFilter] = useState('');
    const [assigneeFilter, setAssigneeFilter] = useState('');

    const statusOptions = ['TODO', 'IN_PROGRESS', 'DONE'];

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        loadTasks();
    }, []);

    const handleOpenAddDialog = () => {
        setCurrentTask({
            title: '',
            description: '',
            status: 'TODO',
            assignee: ''
        });
        setOpenAddDialog(true);
    };

    const handleOpenEditDialog = (task) => {
        setCurrentTask(task);
        setOpenEditDialog(true);
    };

    const handleCloseAddDialog = () => setOpenAddDialog(false);
    const handleCloseEditDialog = () => setOpenEditDialog(false);

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const newTask = await addTask(currentTask);
            setTasks([...tasks, newTask]);
            handleCloseAddDialog();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleUpdateTask = async (e) => {
        e.preventDefault();
        try {
            const updated = await updateTask(currentTask.id, currentTask);
            setTasks(tasks.map(task => (task.id === updated.id ? updated : task)));
            handleCloseEditDialog();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleFilter = async () => {
        // console.log(statusFilter, assigneeFilter)
        try {
            const response = await fetchFilteredTasks(statusFilter, assigneeFilter);
            setTasks(response.data);
            // console.log(response.data)
        } catch (err) {
            console.error('Failed to fetch filtered tasks', err);
        }
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Task Manager</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ marginTop: 4 }}>
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenAddDialog}>
                    Add Task
                </Button>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
                    <TextField
                        select
                        label="Status"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        sx={{ width: 200 }}
                    >
                        <MenuItem value="">All</MenuItem>
                        {statusOptions.map(status => (
                            <MenuItem key={status} value={status}>{status}</MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Assignee"
                        value={assigneeFilter}
                        onChange={(e) => setAssigneeFilter(e.target.value)}
                        sx={{ width: 250 }}
                    />

                    <Button variant="contained" onClick={handleFilter}>Apply Filters</Button>
                </div>
                <Paper sx={{ marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Assignee</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Updated At</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map(task => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.title}</TableCell>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell>{task.status}</TableCell>
                                    <TableCell>{task.assignee}</TableCell>
                                    <TableCell>{new Date(task.createdAt).toLocaleString()}</TableCell>
                                    <TableCell>{new Date(task.updatedAt).toLocaleString()}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleOpenEditDialog(task)}><EditIcon /></IconButton>
                                        <IconButton onClick={() => handleDeleteTask(task.id)}><DeleteIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>

            {/* Dialogs */}
            {currentTask && (
                <>
                    <AddTaskDialog
                        open={openAddDialog}
                        onClose={handleCloseAddDialog}
                        task={currentTask}
                        setTask={setCurrentTask}
                        onSubmit={handleAddTask}
                    />
                    <EditTaskDialog
                        open={openEditDialog}
                        onClose={handleCloseEditDialog}
                        task={currentTask}
                        setTask={setCurrentTask}
                        onSubmit={handleUpdateTask}
                    />
                </>
            )}
        </>
    );
};

export default TasksPage;
