<script setup>
import { onMounted, watch } from 'vue';
import HeaderNav from './components/layout/header-nav.vue';
import Footer from './components/layout/footer.vue';
import SiderBar from './components/layout/sider-bar.vue';
import { getUserInfo } from '@/api/user.js';
import { useGlobalStore } from '@/stores/store.js';
import { useRouter } from 'vue-router';

const { menuStore, userStore } = useGlobalStore();
const router = useRouter();

onMounted(() => {
    if (localStorage.getItem('WSV_TOKEN')) {
        getUserInfo().then((res) => {
            if (res.data.errno !== 0) {
                throw new Error(res.data.message);
            }
            userStore.login({
                ...res.data?.data?.user
            });
        }).catch(err => {
            ElMessage.error(err.msg);
        });
    }
});

watch(
    () => userStore.isLogin,
    (newVal) => {
        if (!newVal) {
            router.push('/admin/login');
        }
    },
);
</script>

<template>
     <div>
        <el-container>
            <el-header><HeaderNav /></el-header>
            <el-main v-if="menuStore.show" class="app-main">
                <el-aside v-show="menuStore.show" width="200px">
                    <sider-bar />
                </el-aside>
                <router-view :key="$route.fullPath"></router-view>
            </el-main>
            <el-main v-else>
                <router-view :key="$route.fullPath"></router-view>
            </el-main>
            <el-footer v-show="!menuStore.show"><Footer /></el-footer>
        </el-container>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.app-main {
    display: flex;
    padding: 0 4px;
    height: 92vh;
}
</style>
