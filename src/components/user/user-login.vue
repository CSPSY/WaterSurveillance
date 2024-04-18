<script setup>
import { useRouter } from 'vue-router';

defineOptions({
    name: 'UserLogin'
});

const router = useRouter();
const jumpToAdminLogin = () => {
    router.push('/admin/login');
};
</script>

<template>
    <section>
        <el-button class="loginBtn" @click="jumpToAdminLogin">后台管理登录</el-button>
    </section>
</template>

<style scoped>
.loginBtn {
    font-size: 15px;
}
</style>