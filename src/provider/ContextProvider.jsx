"use client"
import { fetchCourse } from '@/utilities/getCourse';
import { getUserStudent } from '@/utilities/getStudent';
import React, { createContext, useEffect, useState } from 'react';
 

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [user,setUser] = useState(0);
  const [token,setToken] = useState("");
  const [selectedMenu,setSelectedMenu] = useState('Dashboard');
  const [student,setStudent] = useState({});
  const [courses,setCourses] = useState([]);

  const setTokenInLocalStorage = (t)=>{
    localStorage.setItem('token',t);
  }

  const getTokenFromLocalStorage = ()=>{
    return localStorage.getItem('token');
  }
useEffect(()=>{
  const t = getTokenFromLocalStorage();
  console.log(t)
  setToken(t);
},[])

  useEffect(()=>{
    const fetchData = async () =>{
      
      const userData = await getUserStudent(user);
      setStudent(userData.student);
    }
    fetchData();
  },[user])

  useEffect(()=>{
   
    const fetchData = async () => {

        // const token = getTokenFromLocalStorage();
        // console.log(token)
        console.log('1')
        const fetchedCourses = await fetchCourse(token);
        console.log(fetchedCourses);
        setCourses(fetchedCourses);
    };
  
    fetchData();
  },[user])

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
    setCourses,
    setTokenInLocalStorage,
  }
  return (
    <Context.Provider value={info}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;