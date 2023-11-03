import React, { useState, useEffect } from "react";
import "./Appsign.css";
import "./Appsignin.css"
import Signin from "../../components/signin/Signin";
import axios from "axios";

const Appsign = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Prepare the data object to send to the server
  const data = {
    username: values.username,
    email: values.email,
    birthday: values.birthday,
    password: values.password,
    confirmPassword: values.confirmPassword,
  };

    // Send a POST request to your Flask server
    axios.post("http://localhost:5000/sign", data)
    .then((response) => {
      console.log(response.data);
      // Reset the form or perform any other necessary actions

      if (response.data.success) {
          // If registration is successful, reset the form and navigate to the Appsignin page
          setValues({
            username: "",
            email: "",
            birthday: "",
            password: "",
            confirmPassword: "",
          });

        // If registration is successful, navigate to the Appsignin page
        window.location.href = "/Appsignin";
      }
      
    })
    .catch((error) => {
      console.error(error);
      // Handle errors, if needed
    });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const scrollTarget = document.getElementById("scroll");
    if (scrollTarget) {
      const yOffset = scrollTarget.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="app" id="scroll">
      <form onSubmit={handleSubmit} className="form">
        <h1>Register</h1>
        {inputs.map((input) => (
          <Signin
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="button">Submit</button>
        <p className="below_form">Already registered with us? <a href="/Appsignin">Sign in</a></p>
      </form>
    </div>
  );
};

export default Appsign;
