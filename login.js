import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "achraf" && password === "123") {
      navigate("/home");
    } else {
      setError("Nom d’utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div className="background">
      <div></div>
      <div className="login">
        <div className="login-container">
          <h2 className="title">LOG IN</h2>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleLogin}>
            <div>
              <label>Nom d'utilisateur:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre nom d'utilisateur"
                required
              />
            </div>
            <div>
              <label>Mot de passe:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <div className="links">
              <p>
                Don't have an account? <a href="#register">Register here</a>
              </p>
              <p>
                <a href="#forgot-password">Forgot password?</a>
              </p>
            </div>
            <button type="submit" id="submit" onClick={handleLogin}>
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
