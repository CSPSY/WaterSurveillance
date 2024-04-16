<script setup>
import { ref } from 'vue';
import MapChartArea from './map-chart-area.vue';
import MapBaiduDialog from '../map-factory/map-baidu-dialog.vue';

defineOptions({
    name: 'MapAreaDetailDialog'
});

const props = defineProps(['isVisible', 'name', 'data']);
const emit = defineEmits(['close']);

const detailMapVisible = ref(false);

// 关闭信息框
const handleClose = () => {
    emit('close');
};

// 点击详情，打开地图 --- 水厂
const openDetailMap = () => {
    detailMapVisible.value = true;
};

// 关闭详情地图信息框
const closeDetailDialog = () => {
    detailMapVisible.value = false;
};
</script>

<template>
    <div>
        <el-dialog
            v-model="props.isVisible" :title="props.name"
            width="700" @close="handleClose"
            class="content"
        >
            <map-chart-area :data="data" />
            <map-baidu-dialog :isVisible="detailMapVisible" :name="name" @close="closeDetailDialog" />
            <template #footer>
                <div>
                    <el-button type="primary" @click="openDetailMap">详情</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>