import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import config from "../config";

import useAuthentication from "Hooks/useAuthentication";
import * as categoryActions from "Data/reducers/categories.reducer";

export default function ProductsList() {
  const [products, setProducts] = useState<any[]>();

  const { token, expires } = useAuthentication();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.getCategories());
  }, []);

  return <div></div>;
}
