// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const  user  = useAuth.user;
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//       const path = location.pathname;

//       if (!user && path !== '/login') {
//         navigate('/login', { replace: true });
//         return;
//       }

//       if (user && path === '/login') {
//         navigate('/dashboard', { replace: true });
//         return;
//       }

//       setChecked(true);
//   }, [user, location.pathname, navigate]);

//   if (!checked) {
//     return <div>Loading...</div>;
//   }

//   return children;
// };

// export default ProtectedRoute;
