import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [usernameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const login = () => {
    Axios.post("http://localhost:3000/login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      console.log("success" + response);
    });
  };

  return (
    <div>
      <div className="register">
        <h1> Login</h1>
        <label>userName</label>
        <input
          type="text"
          onChange={(e) => {
            setUserNameLogin(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
        />
        <button onClick={login}> Login</button>
      </div>
    </div>
  );
}

export default Login;
