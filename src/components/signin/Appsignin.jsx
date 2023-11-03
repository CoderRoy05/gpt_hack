import React, { useState, useEffect } from "react";
import "./Appsign.css";
import "./Appsignin.css";
import axios from "axios";
import Specialpage from "../../components/signin/Specialpage";
// import SpecialPage from "./SpecialPage"; // Import the SpecialPage component

const Appsignin = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object to send to the server
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    // Send a POST request to your Flask server for sign-in
    axios
      .post("http://localhost:5000/signin", data)
      .then((response) => {
        console.log(response.data);
        // If sign-in is successful, set isAuthenticated to true and save the username
        if (response.data.success) {
          setIsAuthenticated(true);
          setUsername(response.data.username); // Assuming your API returns the username
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle errors, if needed
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const scrollTarget = document.getElementById("scrolls");
    if (scrollTarget) {
      const yOffset = scrollTarget.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  }, []);

  if (isAuthenticated) {
    // If the user is authenticated, render the SpecialPage component
    return <Specialpage username={username} />;
  }

  return (
    <div className="app" id="scrolls">
      <form onSubmit={handleSubmit} className="form" id="form">
        <h1>Sign In</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={onChange}
          className="input"
          id="input_first"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={onChange}
          className="input"
          id="input_first"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={onChange}
          className="input"
          id="input_first"
          required
        />
        <button className="button">Sign In</button>
        <p className="below_form">Not a member yet? <a href="/Appsign">Create a New Account</a></p>
      </form>
    </div>
  );
};

export default Appsignin;
