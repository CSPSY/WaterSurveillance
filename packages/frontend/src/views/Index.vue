<script setup>
import { ref } from 'vue';
import { jumpMapPage, jumpAboutPage } from '../utils/index.js';

const tabPosition = ref('first');

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
                <div class="content-top">
                    <el-row style="margin-bottom: 14px;">
                        <el-col style="padding-right: 6px;" :span="8">
                            <el-card shadow="always">
                                <div class="content-top-card-number">24%</div>
                                <div style="text-align: center; font-size: 14px;">
                                    在 12/50 个地点检测到 SARS-CoV-2
                                </div>
                            </el-card>
                        </el-col>
                        <el-col style="padding-left: 3px; padding-right: 3px;" :span="8">
                            <el-card shadow="always">
                                <div class="content-top-card-number">34%</div>
                                <div style="text-align: center; font-size: 14px;">
                                    测试覆盖的深圳市地区
                                </div>
                            </el-card>
                        </el-col>
                        <el-col style="padding-left: 6px;" :span="8">
                            <el-card shadow="always">
                                <div class="content-top-card-number">Omicron</div>
                                <div style="text-align: center; font-size: 14px;">
                                    JN.1 (~95%)
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-radio-group fill="#0097db" class="tabs-group" v-model="tabPosition">
                            <el-radio-button class="tab" label="first">全部时间</el-radio-button>
                            <el-radio-button class="tab" label="second">最近 12 个月</el-radio-button>
                            <el-radio-button class="tab" label="third">最近 6 个月</el-radio-button>
                            <el-radio-button class="tab" label="forth">最近 6 周</el-radio-button>
                        </el-radio-group>
                    </el-row>
                </div>
                <div class="content-bottom">
                    <el-row style="margin-bottom: 12px;" :gutter="12">
                        <el-col :span="12">
                            <el-card shadow="hover">
                                <template #header>
                                    <div class="card-header" style="font-weight: 600;">
                                        <span>深圳市</span>
                                    </div>
                                </template>
                                <div style="font-size: 14px;">
                                    待补充 .......
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card shadow="hover">
                                <template #header>
                                    <div class="card-header" style="font-weight: 600;">
                                        <span>坪山区</span>
                                        <el-button style="height: 0;" class="button" text
                                            @click=""
                                        >
                                            选择区域
                                        </el-button>
                                    </div>
                                </template>
                                <div style="font-size: 14px;">
                                    待补充 .......
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-card :span="24" shadow="hover">
                                <template #header>
                                    <div class="card-header" style="font-weight: 600;">
                                        <span>水样分析</span>
                                    </div>
                                </template>
                                <div style="font-size: 14px;">
                                    <el-row>
                                        <el-col :span="12">
                                            待补充 .......
                                        </el-col>
                                        <el-col :span="12">
                                            待补充 .......
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="content">
                </div>
            </el-main>
            <el-footer class="footer">
                Water Surveillance
            </el-footer>
            <div style="display: flex; justify-content: center;">
                <el-affix position="bottom" :offset="10">
                    <el-button-group>
                        <el-button style="opacity: 0.8;" type="info">首页</el-button>
                        <el-button style="opacity: 0.8;" @click="jumpMapPage" type="info">区域</el-button>
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