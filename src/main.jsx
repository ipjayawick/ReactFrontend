import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
// import { AuthProvider } from './context/AuthContext';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <ProtectedRoute>
//         <TasksPage />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/login',
//     element: <LoginPage />
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider>
      <RouterProvider router={router} /> */}
    <TasksPage />
    {/* </AuthProvider> */}
  </StrictMode>,
)
