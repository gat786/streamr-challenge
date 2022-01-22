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

export interface ProductFilters {
  search: string;
  categories: string;
  sortBy: string;
  order: string;
}

function App() {
  const { isAuthenticated } = useAuthentication();

  const dispatch = useDispatch();

  const [filters, setFilters] = useState<ProductFilters>({
    search: "",
    categories: "",
    sortBy: "",
    order: "",
  });

  useEffect(() => {
    dispatch(categoryActions.getCategories());
    dispatch(productActions.getProducts({ ...filters }));
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
      <form
        onSubmit={(event) => {
          event.preventDefault();

          dispatch(productActions.getProducts({ ...filters }));
        }}
        className="plb-4 flex gap-4 flex-wrap items-center w-full pli-8 md:w-11/12 md:pli-0"
      >
        <div className="flex gap-4 items-center">
          <label htmlFor="search-filter">Search</label>
          <input
            type="text"
            id="search-filter"
            placeholder="Search Text"
            value={filters.search}
            onChange={(event) => {
              setFilters({ ...filters, search: event.target.value });
            }}
            className="p-2 text-slate-600"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label htmlFor="category-filter">Category</label>
          <select
            name=""
            defaultValue=""
            onChange={(event) => {
              setFilters({ ...filters, categories: event.target.value });
            }}
            id="category-filter"
            className="bg-transparent p-2 border text-base text-slate-600"
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

        <div className="flex gap-4 items-center">
          <label htmlFor="sort-filter">Sort By</label>
          <select
            name=""
            defaultValue=""
            id="sort-filter"
            onChange={(event) => {
              const selectedValue = event.target.value;
              switch (selectedValue) {
                case "price-asc":
                  setFilters({
                    ...filters,
                    order: "asc",
                    sortBy: "pricePerSecond",
                  });
                  break;
                case "price-desc":
                  setFilters({
                    ...filters,
                    order: "desc",
                    sortBy: "pricePerSecond",
                  });
                  break;
                case "name-asc":
                  setFilters({
                    ...filters,
                    order: "asc",
                    sortBy: "name",
                  });
                  break;
                case "name-desc":
                  setFilters({
                    ...filters,
                    order: "desc",
                    sortBy: "name",
                  });
                  break;
              }
            }}
            className="bg-transparent p-2 border text-base text-slate-600"
          >
            <option value="" hidden>
              Sort By
            </option>

            <option value="price-asc">Price Low - High</option>
            <option value="price-desc">Price High - Low</option>
            <option value="name-asc">Name - Ascending Order</option>
            <option value="name-desc">Name - Descending Order</option>
          </select>
        </div>

        <button className="bg-blue-400 text-white p-2 px-4 rounded-lg">
          Filter
        </button>
      </form>

      <div className="flex flex-wrap gap-8 w-full md:w-11/12 justify-center mbe-12">
        {Object.entries(products).map(([key, product]) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
