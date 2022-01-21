import axios from "axios";
import config from "config";

export const api = config.API_BASE;

export const getHeaders = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};

export const error = (e: any) => {
  return { status: "error", isSuccessful: false, message: e, data: null };
};

export const success = (data: any) => {
  return { status: "success", isSuccessful: true, data: data, message: null };
};

type GetRequestDetails = {
  url: string;
  headers?: any;
  params?: any;
};

export const get = async (
  requestDetails: GetRequestDetails = { url: "", params: {}, headers: {} }
) => {
  try {
    const response = await axios.get(`${requestDetails.url}`, {
      headers: requestDetails.headers,
      params: requestDetails.params,
    });
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type PostRequestDetails = {
  url: string;
  params?: any;
  headers?: any;
  data?: any;
};

export const post = async (
  requestDetails: PostRequestDetails = {
    url: "",
    params: {},
    headers: {},
    data: {},
  }
) => {
  try {
    const response = await axios.post(
      `${requestDetails.url}`,
      requestDetails.data,
      {
        headers: requestDetails.headers,
        params: requestDetails.params,
      }
    );
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type DownloadRequestDetails = {
  url: string;
  params?: any;
  data?: any;
  headers?: any;
};

export const download = async (
  requestDetails: DownloadRequestDetails = {
    url: "",
    params: {},
    data: {},
    headers: {},
  }
) => {
  try {
    const response = await axios.get(`${requestDetails.url}`, {
      headers: requestDetails.headers,
      params: requestDetails.params,
      responseType: "blob",
    });
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type UpdateRequestDetails = {
  url: string;
  params?: any;
  data?: any;
  headers?: any;
};

export const update = async (
  requestDetails: UpdateRequestDetails = {
    url: "",
    params: {},
    data: {},
    headers: {},
  }
) => {
  try {
    const response = await axios.put(requestDetails.url, requestDetails.data, {
      headers: requestDetails.headers,
      params: requestDetails.params,
    });
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type DeleteRequestDetails = {
  url: string;
  params?: any;
  headers?: any;
};

export const del = async (
  requestDetails: DeleteRequestDetails = {
    url: "",
    params: {},
    headers: {},
  }
) => {
  try {
    const response = await axios.delete(requestDetails.url, {
      headers: requestDetails.headers,
      params: requestDetails.params,
    });
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};
