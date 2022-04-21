<script>
import NavBar from '@/components/NavBar.vue'
import { mapStores } from 'pinia'
import { useDataStore } from '../stores/data'
import SideBar from '../components/SideBar.vue'
import Card from '../components/Card.vue'

export default {
  components: { NavBar, SideBar, Card },
  computed: {
    ...mapStores(useDataStore)
  },
  created() {
    if (localStorage.access_token) {
      this.dataStore.isLogin = true
      this.dataStore.fetchProduct()
    }
  },
}
</script>

<template>
  <NavBar />
  <div class="flex">
    <SideBar />
    <RouterView />
  </div>
</template>
