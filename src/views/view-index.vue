<script setup>
import { ref } from 'vue';
import ContentTopList from './components/content-top-list.vue';

const tabPosition = ref('first');
</script>

<template>
    <div class="main">
        <div class="content-top">
            <content-top-list />
            <el-row>
                <el-radio-group fill="#0097db" class="tabs-group" v-model="tabPosition">
                    <el-radio-button class="tab" value="first">全部时间</el-radio-button>
                    <el-radio-button class="tab" value="second">最近 12 个月</el-radio-button>
                    <el-radio-button class="tab" value="third">最近 6 个月</el-radio-button>
                    <el-radio-button class="tab" value="forth">最近 6 周</el-radio-button>
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

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>