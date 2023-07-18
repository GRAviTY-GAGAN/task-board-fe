import { Routes, Route } from "react-router-dom";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
