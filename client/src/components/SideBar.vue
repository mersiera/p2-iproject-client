<script>
import { mapStores } from "pinia";
import { useDataStore } from "../stores/data";

export default {
  computed: {
    ...mapStores(useDataStore)
  },
  methods: {
    doLogout() {
      localStorage.clear()
      this.dataStore.isLogin = false
      this.$router.push('/login')
    },
    addForm() {
      this.$router.push('/add')
    }
  }
}
</script>

<template>
  <div>
    <div class="flex-shrink-0 p-5 bg-gray-800 border-r-2 rounded-r-xl">
      <div class="flex"><svg class="w-10 h-10 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.9498 5.63615C17.3403 5.24563 17.9735 5.24563 18.364 5.63615C18.7545 6.02668 18.7545 6.65984 18.364 7.05037L11.2929 14.1214C10.9024 14.512 10.2693 14.512 9.87873 14.1214C9.48821 13.7309 9.48821 13.0977 9.87873 12.7072L16.9498 5.63615Z"
            fill="currentColor"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.82813 17.5862C9.7695 18.8725 12.4109 18.6603 14.1214 16.9499L21.1924 9.8788C23.1451 7.92617 23.1451 4.76035 21.1924 2.80773C19.2398 0.855106 16.074 0.855106 14.1214 2.80773L7.0503 9.8788C5.33984 11.5893 5.12771 14.2307 6.41392 16.172L2.80766 19.7783C2.41714 20.1688 2.41714 20.802 2.80766 21.1925C3.19819 21.583 3.83135 21.583 4.22188 21.1925L7.82813 17.5862ZM12.7072 15.5356L19.7782 8.46458C20.9498 7.29301 20.9498 5.39351 19.7782 4.22194C18.6067 3.05037 16.7072 3.05037 15.5356 4.22194L8.46452 11.293C7.29294 12.4646 7.29294 14.3641 8.46452 15.5356C9.63609 16.7072 11.5356 16.7072 12.7072 15.5356Z"
            fill="currentColor"></path>
        </svg>
        <span class="font-family-pacifico text-3xl ml-2 text-white">Lelang App</span>
      </div>
      <div class="p-2 w-full mt-2.5">
        <span class="text-gray-300">Main menu</span>
      </div>
      <div class="p-2 w-full">
        <RouterLink to="/" class="flex  text-gray-50 hover:bg-gray-700 p-1 rounded" href="#home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
              fill="currentColor"></path>
          </svg>
          <span class="ml-2.5">Home</span>
        </RouterLink>
        <button @click="addForm" class="flex  mt-2.5 text-gray-50 p-1 rounded hover:bg-gray-700" href="#profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
              fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
              fill="currentColor"></path>
          </svg>
          <span class="ml-2.5">Add Product</span>
        </button>
        <RouterLink to="/auction" class="flex  mt-2.5 text-gray-50 p-1 rounded hover:bg-gray-700" href="#projects">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.9498 5.63615C17.3403 5.24563 17.9735 5.24563 18.364 5.63615C18.7545 6.02668 18.7545 6.65984 18.364 7.05037L11.2929 14.1214C10.9024 14.512 10.2693 14.512 9.87873 14.1214C9.48821 13.7309 9.48821 13.0977 9.87873 12.7072L16.9498 5.63615Z"
              fill="currentColor">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.82813 17.5862C9.7695 18.8725 12.4109 18.6603 14.1214 16.9499L21.1924 9.8788C23.1451 7.92617 23.1451 4.76035 21.1924 2.80773C19.2398 0.855106 16.074 0.855106 14.1214 2.80773L7.0503 9.8788C5.33984 11.5893 5.12771 14.2307 6.41392 16.172L2.80766 19.7783C2.41714 20.1688 2.41714 20.802 2.80766 21.1925C3.19819 21.583 3.83135 21.583 4.22188 21.1925L7.82813 17.5862ZM12.7072 15.5356L19.7782 8.46458C20.9498 7.29301 20.9498 5.39351 19.7782 4.22194C18.6067 3.05037 16.7072 3.05037 15.5356 4.22194L8.46452 11.293C7.29294 12.4646 7.29294 14.3641 8.46452 15.5356C9.63609 16.7072 11.5356 16.7072 12.7072 15.5356Z"
              fill="currentColor"></path>
          </svg>
          <span class="ml-2.5">Auction</span>
        </RouterLink>
      </div>
      <button @click="doLogout"
        class="shadow-sm w-full text-white rounded-md hover:bg-blue-500 flex items-center px-5 py-2 transition-colors duration-150 justify-center bg-blue-600">
        <span class="text-sm">Sign Out</span>
      </button>
    </div>
  </div>
</template>