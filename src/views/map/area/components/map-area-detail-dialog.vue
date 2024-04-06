<script setup>
import MapChartArea from './map-chart-area.vue';

defineOptions({
    name: 'MapAreaDetailDialog'
});

const props = defineProps(['isVisible', 'name', 'data']);
const emit = defineEmits(['close']);

// 关闭信息框
const handleClose = () => {
    emit('close');
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
            <template #footer>
                <div>
                    <el-button type="primary">详情</el-button>
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