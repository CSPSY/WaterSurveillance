<script setup>
import { ref } from 'vue';

</script>

<template>
    <div class="main">
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