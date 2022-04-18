import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * My Profile Component
 * Needs update
 * @returns
 */

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-container">
        <div>
          <h2>My Profile Component</h2>
        </div>

        <button className="btn btn-dark" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default MyProfile;
