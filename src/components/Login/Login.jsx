import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { setUser, loginUser, githubLogin, googleLogin, facebookLogin } =
    useContext(AuthContext);
  const [error, seError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        seError(error.message);
      });
  };
  const handleGitHubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        seError(error.message);
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        seError(error.message);
      });
  };
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        seError(error.message);
      });
  };
  return (
    <div className="w-[40%] max-w-[50%] mx-auto">
      <form onSubmit={handleRegister}>
        <p>Email</p>
        <input
          type="email"
          placeholder="Type here"
          name="email"
          className="input input-bordered w-full "
        />
        <p>Password</p>
        <input
          name="password"
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full "
        />
        {error && <p>{error}</p>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>{" "}
      <div className="flex gap-x-4 my-2">
        <button onClick={handleGitHubLogin} className="btn btn-primary">
          GitHub{" "}
        </button>
        <button onClick={handleGoogle} className="btn btn-secondary">
          Google
        </button>
        <button onClick={handleFacebookLogin} className="btn btn-primary">
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
