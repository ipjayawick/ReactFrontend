import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
// const router = createBrowserRouter([
//   {
//     path: '/dashboard',
//     element: (
//       <ProtectedRoute>
//         {/* <Dashboard /> */}
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/login',
//     element: <LoginPage />
//   },
//   {
//     path: '/tasks/:id',
//     element: (
//       <ProtectedRoute>
//         {/* <TaskDetails /> */}
//       </ProtectedRoute>
//     )
//   }
// ]);

createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <AuthProvider> */}
  {/* <RouterProvider router={router} /> */}
  <TasksPage/>
{/* </AuthProvider> */}
</StrictMode>,
)
