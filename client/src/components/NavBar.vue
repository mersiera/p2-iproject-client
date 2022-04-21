<script>
import { mapStores } from "pinia";
import { useDataStore } from '../stores/data'

export default {
  data() {
    return {
      user: ''
    }
  },
  computed: {
    ...mapStores(useDataStore)
  },
  methods: {
    doLogout() {
      this.dataStore.isLogin = false
      this.dataStore.doLogout()
    }
  },
  created() {
    this.user = localStorage.getItem('email')
  }
}
</script>


<template>
  <div>
    <div class="flex bg-gray-800 border-b rounded-b-2xl">
      <div class="flex items-center px-5 py-2 transition-colors duration-150 text-white  rounded-md">
        <div class="rounded-full bg-gray-500 bg-center bg-cover w-14 h-14 flex-shrink-0"
          style="background-image:url(https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)">
        </div>
      </div>
      <div class="flex items-center px-5 py-2 transition-colors duration-150 text-white rounded-md">
        {{ user }}
      </div>
      <RouterLink to="/login" v-if="!dataStore.isLogin"
        class="flex items-center px-5 py-2 transition-colors duration-150 text-white hover:text-blue-600 hover:bg-blue-50 rounded-md">
        <span class="text-sm">Login</span>
      </RouterLink>
      <RouterLink to="/register" v-if="!dataStore.isLogin"
        class="flex items-center px-5 py-2 transition-colors duration-150 text-white hover:text-blue-600 hover:bg-blue-50 rounded-md">
        <span class="text-sm">Register</span>
      </RouterLink>
    </div>
  </div>

</template>