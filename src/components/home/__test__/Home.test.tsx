import React from "react";
import ReactDOM from "react-dom";
import useLocation from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../Home";

it("Should be true", () => {
  const test = true;
  expect(test).toBe(true);
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Home></Home>, div);
// });

// it("renders button correctly", () => {
//   const { getByTestId } = render(<Home></Home>);
//   expect(getByTestId("search-button")).toHaveTextContent("Search");
// });
