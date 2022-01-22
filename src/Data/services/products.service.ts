import config from "config";
import { get } from "./services.common";

interface GetProductsParams {
  publicAccess: boolean;
  max: number;
}

const getProductsService = async (args: { params: GetProductsParams }) => {
  const url = config.API_BASE + "products";
  return await get({ url, params: args.params });
};

export { getProductsService };
