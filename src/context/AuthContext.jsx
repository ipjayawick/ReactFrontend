// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from '../api/axios'; // Your axios instance

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Optionally, check if the user is authenticated on page load
//     // This could involve an API call to verify if the session is still valid
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get('/auth/user'); // This should return the user data if authenticated
//         setUser(response.data);
//       } catch (err) {
//         setUser(null); // No user found, session expired or not logged in
//       }
//     };

//     fetchUser();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       // Send credentials to the backend for login
//       const response = await axios.post('/auth/login', { email, password });

//       // After successful login, check if the user is authenticated
//       const userResponse = await axios.get('/auth/user'); // Get user info
//       setUser(userResponse.data);
//     } catch (err) {
//       console.error('Login failed:', err);
//       setUser(null); // Handle login failure, user is not authenticated
//     }
//   };

//   const logout = () => {
//     // Send a request to log out the user from the backend, which will invalidate the session
//     axios.post('/auth/logout').then(() => {
//       setUser(null); // Remove user data from state
//     });
//   };

//   const value = {
//     user,         // The current logged-in user, if any
//     login,        // The login function
//     logout,       // The logout function
//     isAuthenticated: !!user, // If the user is logged in or not
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
