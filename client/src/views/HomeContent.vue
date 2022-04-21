<script>
import { mapStores } from "pinia";
import { useDataStore } from "../stores/data";
import Card from "../components/Card.vue";

export default {
  components: { Card },
  computed: {
    ...mapStores(useDataStore)
  },
}
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="product in dataStore.products" :key="product.id">
      <Card :product="product" />
    </div>
  </div>
</template>