<script setup>
import { useGlobalStore } from '@/stores/store';

defineOptions({
    name: 'HeaderNav'
});

const { menuStore } = useGlobalStore();
</script>

<template>
    <div style="width: 100%; height: 56px; padding: 0;">
        <div class="header">
            <div class="header-text">
                <span class="header-title">深圳市水样监测</span>
                <span class="header-banner">Water Surveillance</span>
            </div>
            <div v-show="!menuStore.show">
                <span>最近更新时间：<br /></span><span style="color: #00aeef;">2024.2.25</span>
            </div>
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
    z-index: 999;
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
</style>