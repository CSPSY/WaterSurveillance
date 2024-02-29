<script setup>
import { ref } from 'vue';
import { jumpSummaryPage, jumpMapPage } from '../../utils/index.js';

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
                <div class="content">
                    <el-card :span="24" shadow="hover">
                        <template #header>
                            <div class="card-header" style="font-weight: 600;">
                                <span>更多信息</span>
                            </div>
                        </template>
                        <div style="font-size: 14px;">
                            待补充 .......
                        </div>
                    </el-card>
                </div>
            </el-main>
            <el-footer class="footer">
                Water Surveillance
            </el-footer>
            <div style="display: flex; justify-content: center;">
                <el-affix position="bottom" :offset="10">
                    <el-button-group>
                        <el-button style="opacity: 0.8;" @click="jumpSummaryPage" type="info">首页</el-button>
                        <el-button style="opacity: 0.8;" @click="jumpMapPage" type="info">区域</el-button>
                        <el-button style="opacity: 0.8;" type="info">更多信息</el-button>
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