<script setup>
import { moreInfo } from '../../../utils/aboutInfo.js';

defineOptions({
    name: 'CardInfo'
});
</script>

<template>
    <div style="font-size: 14px;">
        <el-row :gutter="14">
            <el-col v-for="(item, index) in moreInfo" :key="`item-${index}`" :span="24" style="margin-bottom: 32px;">
                <el-card shadow="hover">
                    <template #header>
                        <span class="title-small">{{ item.name }}</span>
                    </template>
                    <div class="content">
                        <section class="item">
                            <span class="title-small">介绍：</span><span>{{ item.desc }}</span>
                        </section>
                        <section class="item">
                            <span class="title-small">标准限值：</span><span>{{ item.threshold }}</span>
                        </section>
                        <section class="item">
                            <span class="title-small">作用：</span><br />
                            <section v-for="(val, index) in item.function">{{ `${index+1}、${val}` }}</section>
                        </section>
                        <section class="item">
                            <span class="title-small">影响：</span><br />
                            <section v-for="(val, index) in item.influence">{{ `${index+1}、${val}` }}</section>
                        </section>
                    </div>
                </el-card>
            </el-col>
        </el-row>
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