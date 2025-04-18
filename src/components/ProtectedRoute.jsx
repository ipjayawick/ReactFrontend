// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// //if user is logged in navigate to taskspage automatically, otherwise dont allow the user to enter the tasks page and Redirect to the Login page
// const ProtectedRoute = ({ children }) => {
//     const user = useAuth.user;
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [checked, setChecked] = useState(false);

//     useEffect(() => {
//         const path = location.pathname;

//         if (!user && path !== '/login') {
//             navigate('/login', { replace: true });
//             return;
//         }

//         if (user && path === '/login') {
//             navigate('/', { replace: true });
//             return;
//         }

//         setChecked(true);
//     }, [user, location.pathname, navigate]);

//     if (!checked) {
//         return <div>Loading...</div>;
//     }

//     return children;
// };

// export default ProtectedRoute;
