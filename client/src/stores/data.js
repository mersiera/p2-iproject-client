import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:3000";
const headers = {
  access_token: localStorage.getItem("access_token"),
};

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    isLogin: false,
    products: [],
    productsByStatus: [],
  }),
  getters: {},
  actions: {
    async doLogin(email, password) {
      try {
        const data = { email, password };

        const res = await axios.post(`${baseUrl}/users/login`, data);
        const { access_token, user } = res.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", user.id);
        localStorage.setItem("email", user.email);
        this.isLogin = true;
        router.push("/");
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
    async doRegister(data) {
      try {
        await axios.post(`${baseUrl}/users/register`, data);
        this.doLogin(data.email, data.password);
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
    doLogout() {
      localStorage.clear();
      router.push("/login");
    },
    async fetchProduct() {
      try {
        const res = await axios.get(`${baseUrl}/products`, { headers });
        this.products = res.data;
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
    async addProduct(data) {
      try {
        await axios.post(`${baseUrl}/products`, data, { headers });
        Swal.fire("Success", "Success create product", "success");
        router.push("/");
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
    async changeStatus(productId) {
      try {
        console.log(`${baseUrl}/products/${productId}`);
        const res = await axios({
          url: `${baseUrl}/products/${productId}`,
          method: "patch",
          headers,
        });
        Swal.fire("Success", res.data.message, "success");
        this.fetchProduct();
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
    async fetchProductByStatus() {
      try {
        const res = await axios.get(`${baseUrl}/products?filter[status]=available`, { headers });
        this.productsByStatus = res.data;
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
    async buy(productId) {
      try {
        const res = await axios({
          url: `${baseUrl}/products/${productId}/payment`,
          headers,
          method: "post",
        });
        // window.location = res.data.redirectUrl;
        window.snap.pay(res.data.transactionToken, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            Swal.fire("Success", result.transaction_status, "success");
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            // Swal.fire("Pending", result.transaction_status, "info");
            console.log(result);
            axios({
              url: `${baseUrl}/products/${productId}?buyerId`,
              method: "put",
              data: {
                message: "success",
              },
              headers,
            })
              .then((result) => {
                Swal.fire("Success", result.data.message, "success");
                this.fetchProductByStatus();
              })
              .catch((error) => {
                console.log(error.response.data.message);
              });
          },
          onError: function (result) {
            /* You may add your own implementation here */
            Swal.fire("Failed", result.transaction_status, "error");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            Swal.fire({
              title: "you closed the popup without finishing the payment",
            });
          },
        });
      } catch (error) {
        Swal.fire("Error", error.response.data.message, "error");
      }
    },
  },
});
