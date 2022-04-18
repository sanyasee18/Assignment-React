import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingSummary from "./components/booking-summary/BookingSummary";
import Cars from "./components/cars/Cars";
import Home from "./components/home/Home";
import MyProfile from "./components/my-profile/MyProfile";
import Navbar from "./components/navbar/Navbar";
import NoMatch from "./components/no-match/NoMatch";
import { CarProps } from "./common/Car.types";
import CarDetails from "./components/car-details/CarDetails";
import Footer from "./components/footer/Footer";
import BookCar from "./components/book-car/BookCar";

function App() {
  return (
    <>
      {/* Navigation Section */}
      <Navbar />
      {/* Routing Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="booking-summary" element={<BookingSummary />} />
        <Route path="cars" element={<Cars cars={CarsList} />} />
        <Route path="cars/:id" element={<CarDetails />} />
        <Route path="book-car" element={<BookCar />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

// In Memory DB for the App
export const CarsList: CarProps[] = [
  {
    id: 1,
    name: "BMW X3",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful SUV.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "SUV",
    price: "60 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/10/19/03/50/bmw-4560531_1280.jpg",
  },
  {
    id: 2,
    name: "BMW H4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Hatchback.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Hatchback",
    price: "80 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274_1280.jpg",
  },
  {
    id: 3,
    name: "BMW C4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Coupe.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Coupe",
    price: "90 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/31/15/50/electric-car-1633932_1280.jpg",
  },
  {
    id: 4,
    name: "BMW S4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Sedan.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Sedan",
    price: "70 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/12/07/02/56/bmw-z8-1888480_1280.jpg",
  },
  {
    id: 5,
    name: "Audi X3",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful SUV.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "SUV",
    price: "60 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/01/19/20/56/truck-3093197_1280.png",
  },
  {
    id: 6,
    name: "Audi H4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Hatchback.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Hatchback",
    price: "80 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/12/03/11/47/car-1879630_1280.jpg",
  },
  {
    id: 7,
    name: "Audi C4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Coupe.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Coupe",
    price: "90 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/12/08/00/10/audi-1890687_1280.jpg",
  },
  {
    id: 8,
    name: "Audi S4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Sedan.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Sedan",
    price: "70 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/17/13/44/sports-car-2651393_1280.jpg",
  },
  {
    id: 9,
    name: "Mercedes X3",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful SUV.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "SUV",
    price: "60 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/07/09/59/mercedes-5269714_1280.jpg",
  },
  {
    id: 10,
    name: "Mercedes H4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Hatchback.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Hatchback",
    price: "80 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/05/03/23/46/mercedes-benz-1370536_1280.jpg",
  },
  {
    id: 11,
    name: "Mercedes C4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Coupe.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Coupe",
    price: "90 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922_1280.jpg",
  },
  {
    id: 12,
    name: "Mercedes S4",
    fuelType: "Petrol and Diesel",
    engine: "2993 to 2998C",
    torque: "450 to 620 NM",
    topSpeed: "230 to 240 Kmph",
    description: "Beautiful Sedan.",
    exterior:
      "Beautiful Exterior with Mat finish with multiple colors and with a special edition of carbo fiber. The LED lapms are gorgeous to look and again the cool automatic opening feature of bacck and front door make the Care Futuristic than ever.",
    interior: [
      "Highend cockpit build.",
      "Big Display with touch compatable.",
      "Centralised AC with fresh air.",
      "Big sunroof with multi features.",
      "Sorounded by multiple cameras and etc.",
    ],
    category: "featured",
    type: "Sedan",
    price: "70 Lakh",
    isBooked: false,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/08/21/03/mercedes-benz-1579305_1280.jpg",
  },
];

export default App;
