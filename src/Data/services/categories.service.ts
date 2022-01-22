import config from "config";
import { get } from "./services.common";

const getCategoriesService = async () => {
  const url = config.API_BASE + "categories";
  return await get({ url });
};

export { getCategoriesService };
