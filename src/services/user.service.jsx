// import config from "config";
import { authHeader, handleResponse } from "../utils";

export const userService = () => {
    getAll()
};

const getAll = () => {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`/users`, requestOptions).then(handleResponse);
};