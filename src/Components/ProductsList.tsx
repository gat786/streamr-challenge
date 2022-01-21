import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config";
import useAuthentication from "../Hooks/useAuthentication";

export default function ProductsList() {
  const [products, setProducts] = useState<any[]>();

  const { token, expires } = useAuthentication();

  const getProducts = () => {
    axios.get(config.API_BASE + "products", {
      headers: {
        "Content-Type": "application/json",
        authorization: "",
      },
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div></div>;
}
