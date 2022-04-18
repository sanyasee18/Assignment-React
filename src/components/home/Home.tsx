import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/**
 * Home Component
 * @returns
 */

const Home = () => {
  const navigate = useNavigate();

  // Save the Search Text
  const [searchText, setSearchText] = useState("");

  // Handle the Search Option
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(searchText);
    navigate("/cars");
  };
  return (
    <>
      {/* CarCarousel Component --- Not working need to check */}
      {/* <div>
        <CarCarousel />
      </div> */}

      <div className="my-container">
        <div className="row">
          <div id="logo" className="text-center">
            <h1>Find Your Dream Car!</h1>
          </div>

          {/* Search Button Section */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  name="search"
                  value={searchText}
                  placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <span className="input-group-btn">
                  <button
                    data-testId="search-button"
                    className="btn btn-success"
                    type="submit"
                  >
                    Search
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
