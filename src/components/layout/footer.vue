<script setup>
import { useRouter } from 'vue-router';

defineOptions({
    name: 'Footer'
});

const router = useRouter();
</script>

<template>
    <div class="main">
        <section class="footer">
            Water Surveillance
        </section>
        <section style="display: flex; justify-content: center;">
            <el-affix position="bottom" :offset="10">
                <el-button-group>
                    <el-button style="opacity: 0.8;" @click="router.push('/')" type="info">首页</el-button>
                    <el-button style="opacity: 0.8;" @click="router.push('/map')" type="info">区域</el-button>
                    <el-button style="opacity: 0.8;" @click="router.push('/about')" type="info">更多信息</el-button>
                </el-button-group>
            </el-affix>
        </section>
    </div>
</template>

<style scoped>
:deep(.el-radio-button__inner) {
    padding: 10px;
    width: 100%;
    color: #ffffff;
    background-color: #8e8e93;
    outline: none;
    border: none;
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