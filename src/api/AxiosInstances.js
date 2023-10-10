import axios from "axios";
import appSetting from "../contants/AppSettings";

const token = localStorage.getItem("token");

export const PublicAxios = axios.create({
    baseURL: appSetting.baseUrl,
    timeout: 10000,
});

export const PrivateAxios = axios.create({
    baseURL: appSetting.baseUrl,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});