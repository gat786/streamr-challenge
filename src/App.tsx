import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import logo from "./logo.svg";

import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";

import useAuthentication from "./Hooks/useAuthentication";

import * as categoryActions from "Data/reducers/categories.reducer";

import config from "./config";
import { RootState } from "Data/reducers";

function App() {
  const { isAuthenticated } = useAuthentication();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.getCategories());
  }, []);

  const categories = useSelector(
    (root: RootState) => root.categoryReducer.categories
  );

  return (
    <div className="App">
      <Navbar />
      <div className="plb-4 flex gap-4 items-center w-full md:w-11/12">
        Filters
        <select
          name=""
          defaultValue=""
          id=""
          className="bg-transparent p-2 border text-base"
        >
          <option value="" hidden>
            Select a Category
          </option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <ProductsList />
    </div>
  );
}

export default App;
