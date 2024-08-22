import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
