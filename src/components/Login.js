import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn, loggedin }) {
  const history = useHistory();
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

    setIsLoggedIn(true);
    loggedin()
    history.push("/MyNovelList");
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Login To Save Your Novels</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
