import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookingSummary.css";

/**
 * Booking Summary Component
 * @returns
 */

const BookingSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-container">
      <h3>Booking Confirmed!</h3>
      <button className="btn btn-dark" onClick={() => navigate("/")}>
        {" "}
        Go to Home
      </button>
    </div>
  );
};

export default BookingSummary;
