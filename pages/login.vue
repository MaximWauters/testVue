<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~~/store/auth';


const auth = useAuthStore()
const email = ref('')
const password = ref('')

/*
function onSubmit() {
  console.log(email.value)
  console.log(password.value)
}
*/
</script>

<template>
  <div class="w-1/4 h-1/4 border-blue-500 border-2 shadow-2xl">login by providing login creds:
    <form class="flex flex-col gap-4 border-2" @submit.prevent="() => auth.login(email,password)">
      <label>
        Email or username
        <input class="border-2 rounded-lg" type="text" v-model="email" />
      </label>
      <label>
        Password
        <input class="border-2 rounded-lg" type="password" v-model="password" />
      </label>
      <button class="bg-white w-fit border-2 border-blue-500" type="submit">Log in</button>
    </form>
  </div>
</template>