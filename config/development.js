import { LocalStorage } from "quasar";

export default {
  API_URL:
    `${LocalStorage.getItem("serverHost")}` || "http://104.248.234.77:5000/",
};
