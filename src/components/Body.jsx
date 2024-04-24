import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Navbar/Sidebar";

const Body = () => {
  return (
    <div className="flex mt-16">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
