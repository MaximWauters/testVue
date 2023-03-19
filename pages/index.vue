<script setup lang="ts">
    const user = useSupabaseUser();
    const {result} = usePost()

    //console.log(user.value);
    

    
</script>


<template>
    <div class="flex justify-start">
        <Post v-for="{title, body, featured} in result" :title="title" :body="body" :featured="featured"></Post>
    </div>
</template>


<!-- styling wordt gehandeld door tailwind als classes in html objects -->
<style>

h1{
    font-size: 5em;
}

</style>