<script>
import { mapStores } from "pinia"
import { useDataStore } from "../stores/data"
import Card from "../components/Card.vue"

export default {
  components: { Card },
  computed: {
    ...mapStores(useDataStore)
  },
  created() {
    this.dataStore.fetchProductByStatus()
  }
}
</script>

<template>
  <div v-for="product in dataStore.productsByStatus" :key="product.id">
    <Card :product="product" />
  </div>
</template>