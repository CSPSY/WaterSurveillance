<script setup>
import { ref, reactive } from 'vue';
import { Cellphone, Key } from '@element-plus/icons-vue';
import { loginAdmin } from '@/api/user.js';
import { useGlobalStore } from '@/stores/store.js';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'LoginCard'
});

const router = useRouter();
const { userStore } = useGlobalStore();

const formRef = ref(null);
const loginInfo = reactive({
    email: '',
    password: ''
});

const formRules = {
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};

const handleLogin = async () => {
    if (!formRef.value) { return; }
    const isValid = await formRef.value.validate();

    if (isValid) {
        loginAdmin(loginInfo).then(res => {
            if (res.data.errno === 0) {
                userStore.login(res.data.data.user);
                localStorage.setItem('WSV_TOKEN', `Bearer `+res.data.data.token);
                ElMessage({ type: 'success', message: res.data.data.message });

                router.push('/admin/water');
            } else {
                ElMessage.error(res.data.message);
            }
        })
    } else {
        ElMessage.error('请检查填写信息');
    }
};
</script>

<template>
    <el-card shadow="hover">
        <el-form :model="loginInfo" :rules="formRules" ref="formRef" label-position="top">
            <el-form-item class="item" prop="email" label-width="100px">
                <el-input type="text" id="wsv-email" autocomplete="email" v-model="loginInfo.email" placeholder=" 邮箱" clearable>
                    <template #prefix>
                        <el-icon><Cellphone /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item class="item" prop="password">
                <el-input type="password" id="password" autocomplete="current-password" v-model="loginInfo.password" placeholder=" 密码" show-password>
                    <template #prefix>
                        <el-icon class="el-input__icon"><Key /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <section class="display-flex">
                <el-button type="primary" @click="handleLogin" text>登 录</el-button>
            </section>
        </el-form>
    </el-card>
</template>

<style scoped>
.item {
    margin-bottom: 22px;
}
.display-flex {
    display: flex;
    justify-content: flex-end;
}
</style>
