import axios from "axios";
import VueAxios from "vue-axios";

class ApiService {
  static vueInstance;

  static init(vueApp) {
    this.vueInstance = vueApp;
    this.vueInstance.use(VueAxios, axios);
    this.vueInstance.axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
  }

  static setHeader() {
    ApiService.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
    ApiService.vueInstance.axios.defaults.headers.common["Accept"] =
      "application/json";
  }

  static query(resource, params) {
    return this.vueInstance.axios.get(resource, params);
  }

  static get(resource, slug = "") {
    return this.vueInstance.axios.get(`${resource}${slug ? "/" + slug : ""}`);
  }

  static post(resource, params) {
    return this.vueInstance.axios.post(`${resource}`, params);
  }

  static delete(resource) {
    return ApiService.vueInstance.axios.delete(resource);
  }

  static update(resource, slug, params) {
    return ApiService.vueInstance.axios.patch(`${resource}/${slug}`, params);
  }
}

export default ApiService;
