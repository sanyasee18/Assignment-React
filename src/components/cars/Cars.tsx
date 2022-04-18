import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarProps, CarsProps } from "../../common/Car.types";

/**
 * Car List Component
 * @param props
 * @returns
 */

const Cars = (props: CarsProps) => {
  const [cars, setCars] = useState<CarProps[]>();
  const [filteredCars, setFilteredCars] = useState<CarProps[]>();

  const navigate = useNavigate();

  // Type of cars for filtering
  const carType = ["All", "Sedan", "SUV", "Hatchback", "Coupe"];

  useEffect(() => {
    setCars(props.cars);
    setFilteredCars(props.cars);
  }, []);

  const handleFilter = (carType: string) => {
    if (carType === "All") {
      setFilteredCars(cars);
    } else {
      const filteredCars = cars?.filter((car) => {
        return car.type.includes(carType);
      });
      setFilteredCars(filteredCars);
    }
  };

  return (
    <div className="container">
      <div
        className="btn-group m-2 p-2"
        role="group"
        aria-label="Basic example"
      >
        {carType.map((cartype) => {
          return (
            <button
              onClick={() => handleFilter(cartype)}
              type="button"
              className="btn btn-secondary"
            >
              {cartype}
            </button>
          );
        })}
      </div>
      <div>
        <h4>Total Cars: {filteredCars?.length}</h4>
      </div>
      <div className="album">
        <div className="container">
          <div className="row">
            {filteredCars?.map((car) => {
              return (
                <div key={car.id} className="col-md-4">
                  <div className="card mb-4 border-dark shadow bg-white">
                    <img
                      src={car.imageUrl}
                      className="card-img-top"
                      alt="car-image"
                    />
                    <div className="card-header">
                      <h5 className="card-title">{car?.name}</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text"> Starting from Rs.{car.price}</p>

                      <button
                        onClick={() =>
                          navigate(`cars${car.id}`, { state: { car } })
                        }
                        className="btn btn-dark text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
