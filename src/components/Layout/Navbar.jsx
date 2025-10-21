import { useAuth } from "../../auth/AuthContext";
import { NavLink } from "react-router";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navClass = ({ isActive }) => "link" + (isActive ? " active" : "");

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <nav>
        <NavLink to="/" className={navClass}>
          <strong>Book Buddy</strong>
        </NavLink>
        <NavLink to="/" className={navClass}>
          Books
        </NavLink>
        {token ? (
          <>
            <NavLink to="/user-profile" className={navClass}>
              Account
            </NavLink>
            <button onClick={handleLogout} className="link logout-btn" type="button">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className={navClass}>
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}
