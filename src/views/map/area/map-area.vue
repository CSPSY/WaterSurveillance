<script setup>
import { ref, onMounted } from 'vue';
import { getMap } from '../../../utils/maputil.js';
import * as echarts from "echarts";
import mapAreaDetailDialog from './components/map-area-detail-dialog.vue';
import { useWaterList } from '../../../hooks/useWaterList';

const { refreshWaterList } = useWaterList();

defineOptions({
    name: 'MapArea'
});

// 点击区域对话框
const detailDialogVisible = ref(false);
const areaName = ref('坪山区');
const areaData = ref([]);

// 初始化区域水质数据信息
const getAreaData = async (name, months) => {
    areaData.value = await refreshWaterList(name, months);
};

// 地图绘制
const mapSZchart = ref();
const chart = ref();

const initMap = () => {
    chart.value = echarts.init(mapSZchart.value);
    const option = {
        // 背景颜色
        // backgroundColor: "#404a59",
        // 提示浮窗样式
        // tooltip: {
        //   show: true,
        //   trigger: "item",
        //   alwaysShowContent: false,
        //   backgroundColor: "#0C121C",
        //   borderColor: "rgba(0, 0, 0, 0.16)",
        //   hideDelay: 100,
        //   triggerOn: "mousemove",
        //   enterable: true,
        //   textStyle: {
        //     color: "#DADADA",
        //     fontSize: "33",
        //     width: 20,
        //     height: 30,
        //     overflow: "break",
        //   },
        //   showDelay: 100,
        // },
        // 地图配置
        geo: {
            map: "shenzhen",
            label: {
                // 通常状态下的样式
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 14,
                        color: "#666666",
                    },
                },
                // 鼠标放上去的样式
                emphasis: {
                textStyle: {
                    color: "#fff",
                },
                },
            },
            // 地图区域的样式设置
            itemStyle: {
                normal: {
                    // borderColor: "rgba(147, 235, 248, 1)",
                    borderColor: "#A5BDF2",
                    borderWidth: 1,
                    areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                        {
                            offset: 0,
                            color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                        },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: "rgba(128, 217, 248, 1)",
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                },
                // 鼠标放上去高亮的样式
                emphasis: {
                    areaColor: "#389BB7",
                    borderWidth: 0,
                },
            },
        },
        graphic: [
            {
                type: "text",
                left: "10%",
                top: "10%",
                style: {
                    textStyle: {
                        fontSize: 10,
                    },
                    font: 'bolder 1.5rem "Microsoft YaHei", sans-serif',
                    fill: "#fff",
                },
            },
        ],
    };

    console.log(getMap());
    // 获得数据
    const [mapName, mapJson] = getMap();
    option.geo.map = mapName;
    // 地图注册，第一个参数的名字必须和 option.geo.map 一致
    echarts.registerMap(mapName, mapJson);

    chart.value.setOption(option);

    chart.value.on("click", async ({ name }) => {
        areaName.value = name;
        await getAreaData(name, 24);
        detailDialogVisible.value = true;
    });
};

onMounted(() => {
    initMap();
});

// 关闭对话框
const closeDetailDialog = () => {
    detailDialogVisible.value = false;
};
</script>

<template>
    <div class="main">
        <div ref="mapSZchart" class="map"></div>
        <!-- 点击区域展示的对话框 -->
        <map-area-detail-dialog :is-visible="detailDialogVisible" :name="areaName" :data="areaData" @close="closeDetailDialog" />
    </div>
</template>

<style scoped>
/* main 样式 */
.main {
    padding: 0.5rem;
}

/* map 样式 */
.map {
    margin: 0 auto;
    width: 900px;
    height: 600px;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>