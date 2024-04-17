<script setup>
import { Document, User } from '@element-plus/icons-vue';
import { useRoute, useRouter } from 'vue-router';

defineOptions({
    name: 'SiderBar'
});

const route = useRoute();
const router = useRouter();

const handleSelect = (index, indexPath) => {
  router.push(index);
};
</script>

<template>
    <el-menu
        :default-active="route.path"
        @select="handleSelect"
        class="sider"
    >
        <el-menu-item index="/admin/water">
            <el-icon><document /></el-icon>
            <span>水样信息管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/auth">
            <el-icon><user /></el-icon>
            <span>权限管理</span>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.sider {
    height: 100%;
}
</style>
