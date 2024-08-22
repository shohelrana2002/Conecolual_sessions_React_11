import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>{" "}
    </div>
  );
};

export default Login;
