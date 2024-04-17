<script setup>
import AreaTable from './components/area-table.vue';
import FactoryTable from './components/factory-table.vue';

</script>

<template>
    <div class="main-container">
        <area-table class="top" />
        <el-divider />
        <factory-table class="bottom" />
    </div>
</template>

<style scoped>
.main-container {
    background-color: #fff;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
}
.factory-data {
    flex: 1;
}
.main-container .top,
.main-container .bottom {
    flex: 1;
}

.button:focus:not(.button:hover) {
  background-color: var(--el-button-bg-color);
  border-color: var(--el-button-border-color);
  color: var(--el-button-text-color);
};
</style>
