import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Brand() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-10"  />
      <Link to="/" className="font-bold text-2xl text-orange-600">
        -SUITE
      </Link>
    </div>
  );
}

export default Brand;
