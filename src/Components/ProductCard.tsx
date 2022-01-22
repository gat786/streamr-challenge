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
        src={props?.product?.imageUrl}
        alt=""
      />
      <div className=" pli-4 ">
        <h3 className="text-xl font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden plb-2">
          {props?.product?.name}
        </h3>
        {props?.product?.pricePerSecond == 0 ? (
          <p>Free</p>
        ) : (
          <p>
            {props.product?.pricePerSecond} {props?.product?.priceCurrency}
          </p>
        )}
      </div>
    </div>
  );
}
