import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import config from "../config";

import useAuthentication from "Hooks/useAuthentication";

import * as productActions from "Data/reducers/products.reducer";

import { Product } from "Data/model/Product";

import styles from "Components/components.module.css";

export default function ProductCard(props: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.productCard}>
      <img
        className="h-56 w-full object-cover"
        src={props?.product?.imageUrl} alt="" />
      <h3 className="text-xl font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden pli-4 plb-4">
        {props?.product?.name}
      </h3>
    </div>
  );
}
