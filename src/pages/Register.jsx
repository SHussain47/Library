import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
import RegisterForm from "../components/Auth/RegisterForm";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      await register(userData);
      navigate("/"); 
    } catch (error) {
      throw error; 
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}
