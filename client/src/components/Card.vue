<script>
import { mapStores } from "pinia"
import { useDataStore } from "../stores/data"

export default {
  data() {
    return {
      idUser: 0,
      path: ''
    }
  },
  props: ['product'],
  computed: {
    ...mapStores(useDataStore)
  },
  created() {
    this.idUser = localStorage.getItem('id')
    this.path = this.$route.fullPath
  },
  methods: {
    changeStatus(productId) {
      this.dataStore.changeStatus(productId)
    },
    buy(productId) {
      this.dataStore.buy(productId)
    }
  }
}
</script>

<template>
  <div class="p-2 w-full">
    <div class="p-2">
    </div>
    <div class="p-2 bg-white h-56 border-2 rounded-xl shadow-xl flex flex-col items-center">
      <div class="p-2 rounded-full bg-gray-500 h-12 w-12 bg-center bg-cover"
        :style="'background-image:url(' + product.imgUrl + ')'">
      </div>
      <span class="block font-bold text-lg">{{ product.name }}</span>
      <div>
        <div class="mt-2 w-full">
          Price: Rp. {{ product.price }},00
        </div>
        <div class="mt-2 w-full">
          User: {{ product.UserId }}
        </div>
      </div>
      <button v-if="idUser == product.UserId && product.status === 'notAvailable'" @click="changeStatus(product.id)"
        class="rounded p-2 shadow-sm flex items-center justify-center space-x-1 mt-auto w-full bg-yellow-300 text-gray-900 hover:bg-yellow-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
            fill="currentColor"></path>
        </svg>
        <span>Auction</span>
      </button>
      <button v-if="path === '/auction'" @click="buy(product.id)"
        class="rounded p-2 shadow-sm flex items-center justify-center space-x-1 mt-auto w-full bg-yellow-300 text-gray-900 hover:bg-yellow-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
            fill="currentColor"></path>
        </svg>
        <span>Buy</span>
      </button>
    </div>
  </div>
</template>