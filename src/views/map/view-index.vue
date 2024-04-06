<script setup>
import mapArea from './area/map-area.vue';

</script>

<template>
    <div class="main">
        <map-area />
    </div>
</template>

<style scoped>
/* main 样式 */
.main {
    padding: 0.5rem;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>