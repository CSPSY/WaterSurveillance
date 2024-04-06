<script setup>
import ChartCity from './chart-city.vue';
import ChartArea from './chart-area.vue';
import selectArea from './select-area.vue';

defineOptions({
    name: 'contentBottomList'
});

const props = defineProps(['cityData', 'areaData', 'areaName']);
const emit = defineEmits(['changeArea']);
</script>

<template>
    <el-row style="margin-bottom: 12px;" :gutter="12">
        <el-col :span="12">
            <el-card shadow="hover">
                <template #header>
                    <div class="card-header" style="font-weight: 600;"><span>深圳市</span></div>
                </template>
                <div style="font-size: 14px; height: 350px;">
                    <chart-city :data="props.cityData" />
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover">
                <template #header>
                    <div class="card-header" style="font-weight: 600;">
                        <select-area :area-name="props.areaName" @changeArea="emit('changeArea', $event)"/>
                    </div>
                </template>
                <div style="font-size: 14px; height: 350px;">
                    <chart-area :data="props.areaData" />
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content-bottom .card-header {
    color: #00aeef;
}

.tabs-group {
    display: flex;
    width: 100%;
}

.tabs-group .tab {
    flex: 1;
}

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