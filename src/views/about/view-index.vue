<script setup>
import { ref } from 'vue';
import CardInfo from './components/card-info.vue';

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
                <card-info />
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.content .item {
    margin-bottom: 12px;
    white-space: pre;
}
.title-small {
    font-weight: 550;
    opacity: .9;
}
</style>