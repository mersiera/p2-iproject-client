<script>
import { mapStores } from "pinia"
import { useDataStore } from "../stores/data"

export default {
  data() {
    return {
      name: '',
      imgUrl: '',
      price: 0,
      CategoryId: 0
    }
  },
  computed: {
    ...mapStores(useDataStore)
  },
  methods: {
    addForm() {
      const data = {
        name: this.name,
        imgUrl: this.imgUrl,
        price: this.price,
        CategoryId: this.CategoryId
      }
      this.dataStore.addProduct(data)
    }
  }
}
</script>

<template>
  <div class="p-2 mt-3">
    <form @submit.prevent="addForm">
      <div class="max-w-xl mx-auto w-full bg-white p-2 border-4 rounded-3xl">
        <div class="p-2 w-full">
          <div class="flex  items-center">
            <label>Name</label>
            <label class="text-red-500 ml-1">*</label>
            <svg class="w-3.5 h-3.5 ml-1 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                fill="currentColor"></path>
              <path
                d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <input v-model="name" type="text" class="w-full rounded border-2 p-2 bg-gray-100 mt-1 outline-none"
            placeholder="Type your product name" />
        </div>
        <div class="p-2 w-full">
          <div class="flex  items-center">
            <label>Image Url</label>
            <label class="text-red-500 ml-1">*</label>
            <svg class="w-3.5 h-3.5 ml-1 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                fill="currentColor"></path>
              <path
                d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <input v-model="imgUrl" type="text" class="w-full rounded border-2 p-2 bg-gray-100 mt-1 outline-none"
            placeholder="Type your image link" />
        </div>
        <div class="p-2 w-full">
          <div class="flex  items-center">
            <label>Price</label>
            <label class="text-red-500 ml-1">*</label>
            <svg class="w-3.5 h-3.5 ml-1 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                fill="currentColor"></path>
              <path
                d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <input v-model="price" type="number" class="w-full rounded p-2  border-2 bg-gray-100 mt-1 outline-none"
            placeholder="Type your price" />
        </div>
        <div class="p-2 w-full">
          <div class="flex  items-center">
            <label>Category</label>
            <label class="text-red-500 ml-1">*</label>
            <svg class="w-3.5 h-3.5 ml-1 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                fill="currentColor"></path>
              <path
                d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <select v-model="CategoryId" class="w-full rounded p-2  border-2 bg-gray-100 mt-1 outline-none">
            <option value=0>--Select Option--</option>
            <option value=1>Painting</option>
            <option value=2>Jewelery</option>
            <option value=3>Vechile</option>
            <option value=4>Antique Stuff</option>
            <option value=5>Other</option>
          </select>
        </div>
        <div class="p-2 w-full mt-2.5">
          <button type="submit"
            class="shadow-sm text-white rounded-md hover:bg-blue-500 flex items-center px-5 py-2 transition-colors duration-150 bg-blue-600">
            <span class="text-sm">Create Product</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>