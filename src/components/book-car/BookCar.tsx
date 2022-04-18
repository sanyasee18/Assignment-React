import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CarProps } from "../../common/Car.types";

/**
 * Component for Bookiing of Car
 * @returns
 */

const BookCar = () => {
  const location: any = useLocation();
  //console.log(location.state);

  const [car, setCar] = useState<CarProps>(location.state.car);
  const navigate = useNavigate();

  // Method to handle book car
  const handleBookCar = () => {
    console.log("Handle Booking of Car here.");
    navigate("/booking-summary");
  };

  return (
    <>
      <div className="p-4 m-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Car Details</h2>
              <hr />
              <img
                src="https://cdn.pixabay.com/photo/2020/01/26/18/52/porsche-4795517_1280.jpg"
                className="card-img-top"
                alt="car-image"
              />
              <h3>{car?.name}</h3>
              <h4>Fule Type</h4>
              <p>{car?.fuelType}</p>
              <h4>Engine</h4>
              <p>{car?.engine}</p>
            </div>
            {/* Booking Form */}
            <div className="col-md-8">
              <h1>Booking Details</h1>
              <form onSubmit={handleBookCar}>
                <div className="row">
                  <div className="form-group col-md-7">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-7">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+91-9090909090"
                      required
                    />
                  </div>
                  <div className="form-group col-md-7">
                    <label>City</label>
                    <select className="form-control">
                      <option defaultValue="Na">Choose...</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Bhubaneswar"> Bhubaneswar</option>
                      <option value="Bhubaneswar">Bhubaneswar</option>
                    </select>
                  </div>

                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      defaultChecked
                    />
                    <label className="form-check-label">
                      I accept the Terms and Conditions
                    </label>
                  </div>
                  <div className="form-group">
                    <h5>Terms and Conditiona</h5>
                    <p>
                      *Terms and Conditions apply. All offers are from dealer.
                      Please get in touch with your nearest dealer for detailed
                      terms and conditions. All taxes are additional. Offer
                      valid till April 25, 2022 and is subject to change without
                      prior notice. Calculations for the following are for a
                      specific mileage and finance amount.
                    </p>
                  </div>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCar;
