import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <p>Home Page</p>
    </div>
  );
};

export default Home;
