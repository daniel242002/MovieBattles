<template>
    <h1>Notes App</h1>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/LoginView">Log in</router-link>
    
    </nav>

    <router-view />
    
</template>

<script setup>
import { ref } from 'vue';
import LoginView from './views/LoginView.vue';
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h1 {
    text-align: center;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>