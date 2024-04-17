<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { BaiduMap, BmBoundary, BmMarker, BmInfoWindow } from 'vue-baidu-map-3x';
import { ENV } from '@/utils/env.js';
import { areaPoint, factoryPoints } from '@/utils/point.js';
import MapChartFactory from './map-chart-factory.vue';
import { useWaterList } from '@/hooks/useWaterList';

const { refreshWaterFactoryList } = useWaterList();

defineOptions({
    name: 'MapBaidu'
});

const props = defineProps(['name', 'initalName']);
const points = ref([]);

const waterFactoryDatas = ref([]);
const getWaterFactoryDatas = async (name, months) => {
    waterFactoryDatas.value = await refreshWaterFactoryList(name, months);
};

const infoWindow = ref(null);

onMounted(() => {
    points.value = factoryPoints.filter(item => item.areaName === props.initalName);
});

const openPointInfo = async (index) => {
    await getWaterFactoryDatas(points.value[index].name, 24);
    points.value[index].show = true;
    nextTick(() => {
        infoWindow.value.forEach(item => {
            item.observer.disconnect();
        });
    });
};

const closePointInfo = (index) => {
    points.value[index].show = false;
};
</script>

<template>
    <baidu-map
        class="map"
        :ak="ENV.MAP_AK" v="3.0" type="API" :map-click="false"
        :center="areaPoint[props.name]" :zoom="12" :scroll-wheel-zoom="true"
    >
        <bm-boundary :name="'深圳市 '+props.name" :strokeWeight="3" strokeColor="blue" :fillOpacity="0.3"></bm-boundary>
        <div style="overflow: visible;" class="point" v-for="(item, index) in points" :key="item.name">
            <bm-marker :position="item.location" :dragging="false" @click="openPointInfo(index)">
                <bm-info-window ref="infoWindow" :title="points[index].name" :width="545" :height="355" :show="item.show" @close="closePointInfo(index)">
                    <el-card class="info" shadow="none">
                        <map-chart-factory :data="waterFactoryDatas" />
                    </el-card>
			    </bm-info-window>
            </bm-marker>
        </div>
    </baidu-map>
</template>

<style scoped>
.map {
    width: 685px;
    height: 520px;
}

.info {
    width: 540px;
    height: 350px;
}
</style>