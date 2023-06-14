import React from "react";
import ThisgoLogo from "../../assets/thisgo-logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="w-100 mt-4 d-flex justify-content-between align-items-center">
      <div className="footer mb-2">
        <a
          href="https://github.com/ThiagoPeixoto81"
          target="_blank"
          className="text-decoration-none"
        >
          <img className="me-1" src={ThisgoLogo} alt="Obrigado!" />
          <span className="thisgo">/thiagopeixoto81</span>
        </a>
      </div>

      <div className="footer mb-2">
        <a
          className="thisgo text-decoration-none"
          href="https://www.omdbapi.com/"
          target="_blank"
        >
          OMDb API
        </a>
      </div>
    </div>
  );
}
