<script setup>
defineOptions({
    name: 'ContentTopList'
});
</script>

<template>
    <div>
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