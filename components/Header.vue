<script setup lang="ts">
    import { useAuthStore } from '~~/store/auth';

    const auth = useAuthStore()
</script>

<template>
    <div class="h-[69px] bg-blue-500 flex gap-5 text-xl text-white font-bold items-center px-5">
        <NuxtLink to="/"> home</NuxtLink>
        <NuxtLink to="/about"> about</NuxtLink>
        <NuxtLink v-if="auth.user" to="/article"> article</NuxtLink>
        <NuxtLink v-if="!auth.user" to="/signup"> signup</NuxtLink>
        <NuxtLink v-if="!auth.user" to="/login"> login</NuxtLink>
        <NuxtLink v-if="auth.user" to="/logout"> logout</NuxtLink>
    </div>
</template>