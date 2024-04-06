import React from "react";
import "../styles/fof.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
function Fof() {
  return (
    <div className="fof">
      <div className="fof__card">
        <h2 className="fof__title">404</h2>
        <button className="fof__btn">
          <Link to="/" className="fof__link">
            Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Fof;
