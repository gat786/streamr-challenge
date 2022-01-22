import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import config from "../config";

import useAuthentication from "Hooks/useAuthentication";


export default function ProductsList() {
  const [products, setProducts] = useState<any[]>();

  const { token, expires } = useAuthentication();

  const dispatch = useDispatch();


  return <div></div>;
}
