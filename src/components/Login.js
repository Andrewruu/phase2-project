import React, { useState } from "react";


function Login({user, handleLogin }) {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleLogin(formData.username, formData.password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Login To Save Your Novels</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">Login</button>
      {user === null ? null:<p>Login Fail</p>}
    </form>
    
  );
}

export default Login;
