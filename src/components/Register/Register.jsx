import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { setUser, registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, photo, password, confirmPassword);

    if (password.length < 6) {
      setError("Password Must be 6 Characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    if (!/\d{2,}$/.test(password)) {
      setError("Plz Add To last 2Number");
      return;
    }
    if (!/[@#%^&*]/.test(password)) {
      setError("Please Add A one Special Charter Like @#%^&* ");
      return;
    }
    setError("");

    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="w-[40%] max-w-[50%] mx-auto">
      <form onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            placeholder="Type here"
            name="email"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          {" "}
          <p>Pic</p>
          <input
            type="file"
            name="photo"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          {" "}
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            name="confirmPassword"
            type="Password"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {error && <small className="text-red-800">{error}</small>}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
