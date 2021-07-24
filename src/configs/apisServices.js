import axios from "axios";
import { LOGOUT } from "../actions/constants";
import store from "./store";
import Swal from "sweetalert2";

export const globalApis2 = axios.create({
	baseURL: process.env.REACT_APP_WS_URL_2,
});

const { dispatch } = store;

globalApis2.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
globalApis2.interceptors.response.use(
	function (response) {
		const { data } = response;
		if (data.status !== "200") {
			const error = new Error(data.message || "Unknown Error");
			throw error;
		}
		return data;
	},
	function (error) {
		if (error.response.status === "401" || error.response.status === 401) {
			Swal.fire({
				title: "Session Expired",
				text: "Please do the login again",
				icon: "warning",
				showCancelButton: false,
			}).then(() => {
				dispatch({ type: LOGOUT });
			});
		} else if (
			error.response.status === "5005" ||
			error.response.status === 5005
		) {
			Swal.fire({
				title: "Forbidden Request",
				text: "Please do the login again",
				icon: "warning",
				showCancelButton: false,
			}).then(() => {
				dispatch({ type: LOGOUT });
			});
		} else if (
			error.response.status === "500" ||
			error.response.status === 500
		) {
			Swal.fire({
				title: "Server Maintenance",
				text: "Server under maintenance , please wait",
				icon: "warning",
				showCancelButton: false,
			}).then(() => {
				dispatch({ type: LOGOUT });
			});
		} else if (
			error.response.status === "502" ||
			error.response.status === 502
		) {
			Swal.fire({
				title: "Server Maintenance",
				text: "Server under maintenance , please wait",
				icon: "warning",
				showCancelButton: false,
			}).then(() => {
				dispatch({ type: LOGOUT });
			});
		}
		return Promise.reject(new Error("Server under maintenance, please wait"));
	}
);
