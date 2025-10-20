// src/pages/Login.jsx
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
import LoginForm from "../components/Auth/LoginForm";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate("/"); 
    } catch (error) {
      throw error; 
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
