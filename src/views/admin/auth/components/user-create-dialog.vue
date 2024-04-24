<script setup>
import { ref, reactive, onUnmounted } from 'vue';

defineOptions({
    name: 'UserCreateDialog'
});

const props = defineProps(['visible']);
const emit = defineEmits(['close']);

const handleClose = () => {
    emit('close');
};

const userInfo = reactive({
    username: '',
    password: '',
    realname: '',
    role: 1,
    telephone: '',
    email: ''
});

const roleOptions = [
    { value: 0, label: '超级管理员' },
    { value: 1, label: '管理员' }
];

const formRef = ref(null);
const formRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    realname: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    role: [{ required: true, message: '请输入用户角色', trigger: 'blur' }],
    telephone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
};

onUnmounted(() => {
    userInfo.username = '';
    userInfo.password = '';
    userInfo.realname = '';
    userInfo.role = '';
    userInfo.telephone = '';
    userInfo.email = '';
});
</script>

<template>
    <el-dialog v-model="props.visible" @close="handleClose" title="新增用户" width="620" align-center>
        <el-card style="margin-bottom: 12px;" shadow="hover">
            <el-form :model="userInfo" :rules="formRules" ref="formRef">
                <el-row :gutter="52">
                    <el-col :span="12">
                        <el-form-item prop="username" label="用户名">
                            <el-input v-model="userInfo.username" placeholder="用户名" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="realname" label="姓名">
                            <el-input v-model="userInfo.realname" placeholder="姓名" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="52">
                    <el-col :span="12">
                        <el-form-item prop="password" label="密码">
                            <el-input v-model="userInfo.password" type="password" placeholder="密码" clearable show-password />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="role" label="用户角色">
                            <el-select v-model=userInfo.role placeholder="请选择用户角色">
                                <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="height: 32px;" :gutter="52">
                    <el-col :span="12">
                        <el-form-item prop="telephone" label="电话号码">
                            <el-input v-model="userInfo.telephone" placeholder="电话号码" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="email" label="邮箱">
                            <el-input v-model="userInfo.email" placeholder="邮箱" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-button style="float: right;" type="primary">确认</el-button>
    </el-dialog>
</template>

<style scoped>
</style>