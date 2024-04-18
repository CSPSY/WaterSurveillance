<script setup>
import { ref, watch } from 'vue';
import { useGlobalStore } from '@/stores/store.js';
import UserLogin from '../user/user-login.vue';
import UserMeta from '../user/user-meta.vue';
import { User }  from '@element-plus/icons-vue';

defineOptions({
    name: 'HeaderNav'
});

const { menuStore, userStore } = useGlobalStore();
const popoverRef = ref();

watch(
    () => userStore.isLogin,
    (newVal) => {
        if (!newVal) {
            popoverRef.value.hide();
        }
    },
);
</script>

<template>
    <div style="width: 100%; height: 56px; padding: 0;">
        <div class="banner">
            <section class="header">
                <div class="header-text">
                    <span class="header-title">深圳市水样监测</span>
                    <span class="header-banner">Water Surveillance</span>
                </div>
                <div v-show="!menuStore.show">
                    <span>最近更新时间：<br /></span><span style="color: #00aeef;">2024.2.25</span>
                </div>
            </section>
            <section>
                <el-popover
                    ref="popoverRef"
                    placement="bottom"
                    :width="userStore.isLogin ? 260 : 120"
                >
                    <template #reference>
                        <el-button class="loginBtn" :icon="User" text/>
                    </template #default>
                    <user-meta v-if="userStore.isLogin" />
                    <user-login v-else />
                </el-popover>
            </section>
        </div>
    </div>
</template>

<style scoped>
/* header 样式 */
.banner {
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 56px;
    background-color: #f7f7f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header {
    display: flex;
    align-items: center;
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
.loginBtn {
    font-size: 22px;
}
.button:last-child {
    margin-left: auto;
}
</style>