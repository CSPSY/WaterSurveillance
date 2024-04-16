<script setup>
import { onMounted, watch, ref } from 'vue';
import MapBaidu from './map-baidu.vue';

defineOptions({
    name: 'MapBaiduDialog'
});

const props = defineProps(['isVisible', 'name']);
const emit = defineEmits(['close']);

const name = ref('');
// 关闭详情地图信息框
const handleClose = () => {
    emit('close');
};

onMounted(() => {
    name.value = props.name === '大鹏新区' ? '龙岗区' : props.name;
});

watch(
    () => props.name,
    (newVal) => {
        name.value = newVal === '大鹏新区' ? '龙岗区' : newVal;
    }
);
</script>

<template>
    <el-dialog
        v-if="props.isVisible"
        v-model="props.isVisible" :title="props.name"
        width="720" @close="handleClose"
    >
        <map-baidu :name="name" :initalName="props.name"/>
    </el-dialog>
</template>

<style scoped>
</style>