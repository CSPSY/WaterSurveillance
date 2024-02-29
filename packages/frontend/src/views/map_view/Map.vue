<script setup>
import { ref, onMounted } from 'vue';
import { jumpSummaryPage, jumpAboutPage } from '../../utils/index.js';
import { getMap } from '../../utils/maputil.js';
import * as echarts from "echarts";



// 点击区域对话框
const dialogVisible = ref(false);

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
    // 地图注册，第一个参数的名字必须和option.geo.map一致
    echarts.registerMap(mapName, mapJson);

    chart.value.setOption(option);

        chart.value.on("click", ({ name }) => {
            console.log(name);
            dialogVisible.value = true;
    //     //点击各区事件 我这里功能是点击出现弹框
    //     this.show = true;
    //     this.name = name;
    //     document.addEventListener("click", function (e) {
    //         var x = e.pageX;
    //         var y = e.pageY;
    //         var pic = document.querySelector(".info-box");
    //         pic.style.left = x - 250 + "px";
    //         pic.style.top = y - 150 + "px";
    //     });
    //     // 注册地图
    //     echarts.registerMap(mapName, mapJson);
    //     // 渲染
    //     chart.value.setOption(option, true);
    });
};

onMounted(() => {
    initMap();
});

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header style="width: 100%; height: 56px; padding: 0;">
                <div class="header">
                    <div class="header-text">
                        <span class="header-title">深圳市水样监测</span>
                        <span class="header-banner">Water Surveillance</span>
                    </div>
                    <div>
                        <span>最近更新时间：<br /></span><span style="color: #00aeef;">2024.2.25</span>
                    </div>
                </div>
            </el-header>
            <el-main class="main">
                <div
                    ref="mapSZchart"
                    class="map"
                ></div>
                <!-- 点击区域展示的对话框 -->
                <el-dialog
                    v-model="dialogVisible"
                    title="Tips"
                    width="500"
                    :before-close="handleClose"
                >
                    <span>This is a message</span>
                    <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="dialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogVisible = false">
                            Confirm
                        </el-button>
                    </div>
                    </template>
                </el-dialog>
            </el-main>
            <el-footer class="footer">
                Water Surveillance
            </el-footer>
            <div style="display: flex; justify-content: center;">
                <el-affix position="bottom" :offset="10">
                    <el-button-group>
                        <el-button style="opacity: 0.8;" @click="jumpSummaryPage" type="info">首页</el-button>
                        <el-button style="opacity: 0.8;" type="info">区域</el-button>
                        <el-button style="opacity: 0.8;" @click="jumpAboutPage" type="info">更多信息</el-button>
                    </el-button-group>
                </el-affix>
            </div>
        </el-container>
    </div>
</template>

<style scoped>
/* header 样式 */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    background-color: #f7f7f8;
    padding-left: 14px;
}
.header-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.header-title {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: .1rem;
    padding: 0 12px 0 0;
    margin-right: 12px;
    margin-bottom: 4px;
}
.header-banner {
    padding: 0 12px;
    background-color: #00aeef;
    color: #ffffff;
    font-size: 14px;

    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
}
.header-content-top {
    padding: 0 12px;
    background-color: #00aeef;
    color: #ffffff;
    font-size: 14px;

    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
}
.button:last-child {
    margin-left: auto;
}

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

/* footer 样式 */
.footer {
    padding: 16px;
    text-align: center;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>