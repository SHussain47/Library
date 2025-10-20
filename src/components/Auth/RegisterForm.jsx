import { useState } from "react";
import { Link } from "react-router";

export default function RegisterForm({ onRegister }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const tryRegister = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      await onRegister({
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={tryRegister} className="register-form">
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Register</button>

      {error && <p role="alert">{error}</p>}

      <p>
        Already have an account? <Link to="/login">Log in</Link>.
      </p>
    </form>
  );
}
