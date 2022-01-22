import config from "config";
import { get } from "./services.common";

const getProductsService = async () => {
  const url = config.API_BASE + "products";
  return await get({ url, params: { publicAccess: true } });
};

export { getProductsService };
