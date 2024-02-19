"use client"
import React, { createContext, useState } from 'react';
 

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [user,setUser] = useState(0);
  const [token,setToken] = useState("");
  const [selectedMenu,setSelectedMenu] = useState('Dashboard');
  const [student,setStudent] = useState({});
  const [courses,setCourses] = useState([]);
  const info = {
    user,
    setUser,
    token,
    setToken,
    selectedMenu,
    setSelectedMenu,
    setStudent,
    student,
    courses,
    setCourses
  }
  return (
    <Context.Provider value={info}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;