<template>
    <div class="container">
        <div class="text-center justify-center">
            <img src="./assets/images/home.png" alt="logo">
            <h2 class="bg-green-400">Welcome to Vue.js with TypeScript and Webpack!</h2>
            <p>This is a simple application that demonstrates the integration of Vue.js, TypeScript, and Webpack.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
})
</script>

<style scoped></style>
