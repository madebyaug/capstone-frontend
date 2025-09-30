import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function User() {
  const { token, logout } = useAuth();

  return (
    <>
      {token ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <div id="user">
          <NavLink to="/login">Sign-in</NavLink>
          <NavLink to="/register">New User?</NavLink>
        </div>
      )}
    </>
  );
}
