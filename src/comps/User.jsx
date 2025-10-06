import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";

export default function User() {
  const { token, logout } = useAuth();
  // const { data: users, loading } = useQuery("/users", ["users"]);
  // console.log(users);

  // if (loading || !users) return <p className="tag">loading...</p>;

  // const finduser = users.filter((user) => {
  //   token === user.id;
  //   console.log(user.id);
  //   console.log(token.id);
  //   return user.username;
  // });

  // console.log(finduser);

  return (
    <>
      {token ? (
        <div id="user">
          <h1>{`Hi, user`}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div id="user">
          <div className="buttons">
            <NavLink className="login" to="/users/login">
              Sign-in
            </NavLink>
            <NavLink className="register" to="/users/register">
              New User?
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
