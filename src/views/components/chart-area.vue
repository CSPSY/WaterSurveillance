<script setup>
import { ref, onMounted, onBeforeUnmount, markRaw, watch } from 'vue';
import * as echarts from 'echarts';

defineOptions({
    name: 'ChartArea'
});

// 定义组件的 props
const props = defineProps(['data']);

// 定义组件的响应式数据
const lineChart = ref(null);
const chart = ref(null);

// 生命周期钩子：组件挂载后初始化图表
onMounted(() => {
    initializeChart();
    updateChart();
});

// 使用 watch 监听数据变化
watch(
    () => props.data,
    () => {
        updateChart();
    },
    { deep: true } // 监听对象内部变化
);

// 初始化 ECharts 图表
const initializeChart = () => {
    chart.value = markRaw(echarts.init(lineChart.value));
    chart.value.on('mouseover', handleMouseover);
};

// 更新图表数据
const updateChart = () => {
    const option = {
        // title: {
        //     text: '水质'
        // },
        tooltip: {
            trigger: 'axis',
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        legend: {
            data: ['游离氯值（mg/L）', 'ph值'],
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: props.data.map(item => item.month),
        },
        yAxis: [
            {
                type: 'value',
            },
            {
                type: 'value',
            }
        ],
        series: [
            {
                name: '游离氯值（mg/L）',
                type: 'line',
                yAxisIndex: 0,
                data: props.data.map(item => item.free_chlorine),
            },
            {
                name: 'ph值',
                type: 'line',
                yAxisIndex: 1,
                data: props.data.map(item => item.ph_value),
            },
            {
                name: '浑浊度（NTU）',
                type: 'line',
                data: props.data.map(item => item.turbidity),
            },
            {
                name: '铂钴色度',
                type: 'line',
                data: props.data.map(item => item.platinum_cobalt_color),
            },
        ],
    };

    chart.value.setOption(option);
};

// 鼠标悬停事件处理函数
const handleMouseover = params => {
    // 处理鼠标悬停事件，可以在这里实现浮现数据的逻辑
    // console.log(params);
};

// 生命周期钩子：组件销毁前销毁图表
onBeforeUnmount(() => {
    if (chart.value) {
        chart.value.off('mouseover', handleMouseover);
        chart.value.dispose();
    }
});
</script>

<template>
    <div ref="lineChart" class="line-chart"></div>
</template>

<style scoped>
.line-chart {
    width: 100%;
    height: 100%;
}
</style>
