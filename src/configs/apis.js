import axios from "axios";
import store from "./store";
import Swal from "sweetalert2";

export const downloadAxios = axios.create({
	baseURL: process.env.REACT_APP_WS_URL,
	responseType: "blob",
});

export const globalApis = axios.create({
	baseURL: "https://api.coingecko.com/api/v3"
});


