import { useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onRegister = async (formData) => {
    // const fullname = formData.get("fullname");
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/users/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="register">
      <div className="heading">
        <h1>New User</h1>
        <p className="description">Register for a new account.</p>
      </div>
      <form action={onRegister}>
        <label>
          <input type="text" name="username" placeholder="username*" required />
        </label>

        <label>
          <input
            type="password"
            name="password"
            placeholder="password*"
            required
          />
        </label>
        <button>Proceed to Continue</button>
      </form>
      {error ? (
        <h3 className="error">{error}</h3>
      ) : (
        <h3>Check Email for Account Confirmation.</h3>
      )}
    </div>
  );
}
