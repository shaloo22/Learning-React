import React, { useEffect, useState } from 'react';
import './FormInput.css';

const FormInput = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [error, setError] = useState("");
  const [age, setAge] = useState(localStorage.getItem("age") || "");
  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  const [successMessage, setSuccessMessage] = useState(localStorage.getItem("successMessage") || "");

  const [userData, setUserData] = useState(() => {
    const storeData = localStorage.getItem("userData");
    return storeData ? JSON.parse(storeData) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !age.trim() || !address.trim()) {
      setError("All fields are required!");
      setSuccessMessage("");
      return;
    }

    const newUser = { name, email, age, address };
    const updatedData = [...userData, newUser];

    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData);

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("address", address);

    setError("");
    setSuccessMessage("Form submitted successfully!");

    setName("");
    setEmail("");
    setAge("");
    setAddress("");
  };

  useEffect(() => {
    if (successMessage) {
      localStorage.setItem("successMessage", successMessage);

      const timer = setTimeout(() => {
        setSuccessMessage("");
        localStorage.removeItem("successMessage");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleDelete = () => {
    localStorage.clear();
    setName("");
    setEmail("");
    setAge("");
    setAddress("");
    setSuccessMessage("");
    setError("");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Form Handling</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={name} placeholder="Enter Name..." onChange={(e) => setName(e.target.value)} className="input-field" />
        <input type="email" value={email} placeholder="Enter Email..." onChange={(e) => setEmail(e.target.value)} className="input-field" />
        <input type="number" value={age} placeholder="Enter Age..." onChange={(e) => setAge(e.target.value)} className="input-field" />
        <input type="text" value={address} placeholder="Enter Address..." onChange={(e) => setAddress(e.target.value)} className="input-field" />

        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="delete-btn" onClick={handleDelete}>Delete All</button>

        {successMessage && <p className="success">{successMessage}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default FormInput;
