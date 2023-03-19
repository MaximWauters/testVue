<script setup lang="ts">
    defineProps({
        title: {type: String, required: true},
        body: {type: String, required: true},
        featured: {type: Boolean}
    })
</script>

<template>
    <div 
    class="p-8 mt-5 w-fit rounded-lg ml-5 border-blue-500 border-2 md:border-red-500 shadow-2xl "
    :class="{ '!border-yellow-400': featured }"
    >   
        <p v-if="featured" class="text-[30px] text-black font-bold">this is a featured post</p>
        <p class="text-[30px] text-black font-bold">{{ title }}</p>
        <p class="text-[16px] text-black">{{ body }}</p>
    </div>
</template>