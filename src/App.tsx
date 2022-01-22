import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import logo from "./logo.svg";

import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";

import useAuthentication from "./Hooks/useAuthentication";

import * as categoryActions from "Data/reducers/categories.reducer";
import * as productActions from "Data/reducers/products.reducer";

import config from "./config";
import { RootState } from "Data/reducers";

function App() {
  const { isAuthenticated } = useAuthentication();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.getCategories());
    dispatch(productActions.getProducts());
  }, []);

  const categories = useSelector(
    (root: RootState) => root.categoryReducer.categories
  );

  const products = useSelector(
    (root: RootState) => root.productReducer.products
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

      <div className="flex flex-wrap gap-8 w-full md:w-11/12 justify-center">
        {Object.entries(products).map(([key, product]) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
