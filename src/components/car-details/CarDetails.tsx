import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarProps } from "../../common/Car.types";
import { useLocation } from "react-router-dom";

/**
 * Car Details Component to show Car Details
 * @returns
 */

const CarDetails = () => {
  // const params = useParams();
  // const carId = params.id;

  const navigate = useNavigate();
  const location: any = useLocation();

  console.log(location.state);

  const [car, setCar] = useState<CarProps>(location.state.car);

  console.log(car);

  // method to handle booking of car
  const handleBook = () => {
    navigate("/book-car", { state: { car } });
  };

  return (
    <div className="p-4 m-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/26/18/52/porsche-4795517_1280.jpg"
              className="card-img-top"
              alt="car-image"
            />
          </div>
          <div className="col-md-4">
            <h2>Car Specification</h2>
            <hr />
            <h4>Fule Type</h4>
            <p>{car?.fuelType}</p>
            <h4>Engine</h4>
            <p>{car?.engine}</p>
            <h4>Torque</h4>
            <p>{car?.torque}</p>
            <h4>Top Speed</h4>
            <p>{car?.topSpeed}</p>
            <h4>Exterior</h4>
            <p>{car?.exterior}</p>
          </div>
        </div>
        <div className="p-2 m-2 d-flex justify-content-center">
          <button onClick={handleBook} className="btn btn-dark">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
