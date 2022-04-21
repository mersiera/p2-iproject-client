<script>
import NavBar from '@/components/NavBar.vue'
import { mapStores } from 'pinia'
import { useDataStore } from '../stores/data'

export default {
  components: { NavBar },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      address: '',
      mobile: ''
    }
  },
  computed: {
    ...mapStores(useDataStore)
  }, methods: {
    doRegister() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        address: this.address,
        mobile: this.mobile
      }
      this.dataStore.doRegister(data)
    }
  }
}
</script>

<template>
  <NavBar />
  <div class="flex h-96 flex-col justify-center lg:bg-transparent mt-16">
    <div class="flex justify-center p-2 w-full">
      <form @submit.prevent="doRegister"
        class="w-96 p-3 border rounded-md ring-0 shadow-md filter drop-shadow-md relative ">
        <label class="block">Username</label>
        <input v-model="username" type="text" class="w-full border-2 p-2 my-2 rounded-xl" placeholder="Username" />
        <label class="block">Email</label>
        <input v-model="email" type="email" class="w-full border-2 p-2 my-2 rounded-xl" placeholder="Email" />
        <label class="block font-family-asap">Password</label>
        <input v-model="password" type="password" class="w-full border-2 p-2 my-2 rounded-xl" placeholder="Password" />
        <label class="block font-family-asap">Address</label>
        <input v-model="address" type="text" class="w-full border-2 p-2 my-2 rounded-xl" placeholder="Address" />
        <label class="block font-family-asap">Phone Number</label>
        <input v-model="mobile" type="text" class="w-full border-2 p-2 my-2 rounded-xl" placeholder="Phone Number" />
        <input type="submit"
          class="p-2 shadow-sm text-white block rounded-3xl bg-blue-500 hover:bg-blue-600 justify-center justify-items-center justify-self-center content-center items-center self-center place-content-center place-items-center place-self-center"
          value="Submit" />
      </form>
    </div>
  </div>
</template>