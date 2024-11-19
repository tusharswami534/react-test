import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
    selectColor: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Form Validation</h2>

        <div className="mb-4">
        <label className="block text-gray-700">First Name:</label>
        <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Last Name:</label>
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Password:</label>
        <input
            type="password" name="password" value={formData.password} onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Confirm Password:</label>
        <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="mb-4 flex items-center">
        <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
        />
        <label className="text-gray-700">I agree to the terms and conditions</label>
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Select a color:</label>
        <select
            name="selectOption"
            value={formData.selectOption}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="">Select a color</option>
            <option value="Red">Red</option>
            <option value="BLue">Blue</option>
            <option value="Green">Green</option>
        </select>
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Number:</label>
        <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        Submit
        </button>
    </form>
    </div>
  );
};

export default FormValidation;
