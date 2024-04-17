<script setup>
import { areaNameMap } from '@/utils/areaName.js';

defineOptions({
    name: 'SelectArea'
});

const props = defineProps(['areaName']);
const emit = defineEmits(['changeArea']);

</script>

<template>
    <span>{{ props.areaName }}</span>
    <el-dropdown max-height="200">
        <span class="el-dropdown-link">选择区域</span>
        <template #dropdown>
            <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item
                    v-for="(value, key) in areaNameMap.values()" :key="value"
                    @click="emit('changeArea', value)"
                >{{ value }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<style scoped>

:deep(.el-radio-button__inner) {
    padding: 10px;
    width: 100%;
    color: #ffffff;
    background-color: #8e8e93;
    outline: none;
    border: none;
}

.el-dropdown-link:focus {
    outline: none;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>