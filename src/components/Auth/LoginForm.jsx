// src/components/Auth/LoginForm.jsx
import { useState } from "react";
import { Link } from "react-router";

export default function LoginForm({ onLogin }) {
  const [error, setError] = useState(null);

  const tryLogin = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await onLogin({ email, password });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={tryLogin} className="login-form">
      <label>
        Email
        <input type="text" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>

      {error && <p role="alert">{error}</p>}

      <p>
        Don’t have an account? <Link to="/register">Register</Link>!
      </p>
    </form>
  );
}
