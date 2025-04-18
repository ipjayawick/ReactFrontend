// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getUser, login, logout } from '../api/axios';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// //Load the auth context when the application loads and store user data in the context.
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = getUser();
//         setUser(response.data);
//       } catch (err) {
//         setUser(null);
//       }
//     };

//     fetchUser();
//   }, []);

//   const loginUser = async (email, password) => {
//     try {
//       const response = login(email, password);
//       //get current user and store in context
//       const userResponse = getUser();
//       setUser(userResponse.data);
//     } catch (err) {
//       console.error('Login failed:', err);
//       setUser(null);
//     }
//   };

//   const logoutUser = async () => {
//     try {
//       logout();
//       setUser(null);
//     } catch (error) {
//       console.error("Logout Failed!", error)
//     }
//   };

//   const value = {
//     user,
//     login,
//     logout
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
