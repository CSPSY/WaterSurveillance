<script setup>
import { ref, onMounted } from 'vue';
import ContentTopList from './components/content-top-list.vue';
import contentBottomList from './components/content-bottom-list.vue';
import { useWaterList } from '@/hooks/useWaterList.js';

const { refreshWaterList } = useWaterList();

const tabPosition = ref('first');

const months = ref(6);
const chartCityData = ref([]);
const chartAreaData = ref([]);

const areaName = ref('坪山区');

// 初始化数据 / 获取最近几月水质信息
const handleGetData = async (val) => {
    months.value = val;
    chartCityData.value = await refreshWaterList('深圳市', months.value);
    chartAreaData.value = await refreshWaterList(areaName.value, months.value);
};

// 选择区域，更新区域水质信息
const changeAreaName = async (name) => {
    areaName.value = name;
    chartAreaData.value = await refreshWaterList(areaName.value, months.value);
};

onMounted(() => {
    handleGetData(6);
});
</script>

<template>
    <div class="main">
        <div class="content-top">
            <content-top-list />
            <el-row>
                <el-radio-group fill="#0097db" class="tabs-group" v-model="tabPosition">
                    <el-radio-button class="tab" value="first" @click="handleGetData(6)">最近 6 个月</el-radio-button>
                    <el-radio-button class="tab" value="second" @click="handleGetData(9)">最近 9 个月</el-radio-button>
                    <el-radio-button class="tab" value="third" @click="handleGetData(12)">最近 1 年</el-radio-button>
                    <el-radio-button class="tab" value="forth" @click="handleGetData(24)">最近 2 年</el-radio-button>
                </el-radio-group>
            </el-row>
        </div>
        <div class="content-bottom">
            <content-bottom-list
                :city-data="chartCityData" :area-data="chartAreaData" :area-name="areaName" @changeArea="changeAreaName"
            />
        </div>
    </div>
</template>

<style scoped>
/* main 样式 */
.main {
    padding: 0.5rem;
}

/* content-top */
.content-top {
    margin-bottom: 48px;
}

.content-top-card-number {
    text-align: center;
    color: #00aeef;
    font-weight: 600;
    margin-bottom: 3px;
}

.content {
    max-width: 968px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
}

.content .begin {
    margin-top: 16px;
}

.content .begin h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 12px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* content-bottom */
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