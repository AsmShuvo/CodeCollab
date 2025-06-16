import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    // Email must contain '@gmail.com'
    return email.includes("@gmail.com");
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long, containing at least 1 letter and 1 number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(formData.email)) {
      setError("Email must contain @gmail.com");
      return;
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 6 characters, with at least 1 letter and 1 number"
      );
      return;
    }

    // Password confirmation validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // If all validations pass, clear error message and show success alert
    setError("");

    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      showConfirmButton: false,
      timer: 1500,
    }).then((result) => {
      navigate("/login");
    });

    // If needed, log formData or send it to the backend here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#0d1117] text-gray-200 min-h-screen flex justify-center py-10 items-center flex-col">
      <div className="text-center">
        <img
          src="/images/logo.png"
          alt="App Logo"
          className="w-16 mb-5 mx-auto"
        />
        <h2 className="text-2xl">Create Your Account</h2>
      </div>
      <form
        className="bg-[#151B23] border border-gray-700 p-4 rounded-lg w-80 mt-5"
        onSubmit={handleSubmit}
      >
        {/* Error message */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block mb-2 text-sm">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full border border-gray-700 p-1 bg-[#0d1117] text-gray-200 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-600 p-1 bg-[#0d1117] text-gray-200 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-gray-600 p-1 bg-[#0d1117] text-gray-200 rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full border border-gray-600 p-1 bg-[#0d1117] text-gray-200 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white rounded-lg"
        >
          Create Account
        </button>
        <div className="text-center mt-4 text-sm">
          <a href="#" className="text-blue-400">
            Sign in with a passkey
          </a>
        </div>
      </form>
      <p className="mt-4 text-sm">
        <a href="#" className="text-blue-400">
          Already have an account? Sign in
        </a>
      </p>
    </div>
  );
};

export default Register;
