<script setup>
import { Document, User } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'SiderBar'
});

const router = useRouter();
const routerMap = ['/admin', '/admin/auth'];

const handleSelect = (index, indexPath) => {
  console.log(index, indexPath);
  router.push(routerMap[index]);
};
</script>

<template>
    <el-menu
        default-active="0"
        @select="handleSelect"
        class="sider"
    >
        <el-menu-item index="0">
            <el-icon><document /></el-icon>
            <span>水样信息管理</span>
        </el-menu-item>
        <el-menu-item index="1">
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
