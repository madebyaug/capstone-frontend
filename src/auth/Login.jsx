import { useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login, token } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {!token && (
        <div id="login">
          <div className="heading">
            <h1>Sign-In</h1>
            <p className="description">Login to access account.</p>
          </div>
          <form action={onLogin}>
            <label>
              <input
                type="username"
                name="username"
                placeholder="username*"
                required
              />
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
            <h3>Email? Reach Out at Shop@Aug.Services</h3>
          )}
        </div>
      )}
    </>
  );
}
