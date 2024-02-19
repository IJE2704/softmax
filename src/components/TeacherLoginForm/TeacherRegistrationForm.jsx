"use client";

import Image from "next/image";
import React, { useState } from "react";

import logo from "@/assets/softmaxLogo.png";
import teacher from "@/assets/teacher.png";
import Link from "next/link";
import { CiHome } from "react-icons/ci";

const TeacherRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      date: "",
    });
  };

  return (
    <div className="lg:w-[1100px] lg:h-screen mx-4 lg:mx-auto flex justify-center items-center bg-[#b7dfc9] px-5">
      <div className="w-full flex flex-col lg:flex-row justify-between  bg-white rounded">
        <div className="lg:w-1/2 h-full bg-white rounded">
          <div className=" flex justify-between items-start mx-4 mt-4">
            <Link href="/">
              <Image src={logo} width={50} height={50} alt="logo"></Image>
            </Link>
            <Link href="/">
              <p className="hover:text-[#20B486]">
                <CiHome size={40}></CiHome>
              </p>
            </Link>
          </div>
          <div className="lg:w-[80%] mx-auto">
            <Image src={teacher} layout="responsive" alt="sign up"></Image>
          </div>
        </div>
        <div className="lg:w-1/2 px-8 py-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl lg:text-6xl text-center font-semibold mb-10">
            Fill the form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your subject"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Teaching Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your teching experience"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700"
              >
                Introduction
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write about you"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#20B486] text-white py-2 px-4 rounded-md hover:bg-[#147154] transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
