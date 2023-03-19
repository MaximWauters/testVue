<script setup lang="ts">
import { useAuthStore } from '~~/store/auth';


const auth = useAuthStore()
   //const client = useSupabaseClient()
   //const { auth } = useSupabaseAuthClient()
   //const userLogout = async () => { await auth.signOut(); window.location.reload(); navigateTo('/');  }
    
</script>


<template>
    <p>welcome</p><br><br>
    <ArticleForm />

</template>

