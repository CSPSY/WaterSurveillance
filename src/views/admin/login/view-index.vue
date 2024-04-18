<script setup>
import loginCard from './components/login-card.vue';
</script>

<template>
    <div class="main">
        <login-card class="login-card" />
    </div>
</template>

<style scoped>
.main {
    height: 84vh;
}
.login-card {
    opacity: .8;
    border-radius: 7px;
    padding: 22px 8px 18px;
    width: 380px;
    height: 170px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
