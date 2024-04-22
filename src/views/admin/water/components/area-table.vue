<script setup>
import { onMounted, ref } from 'vue';
import { useAreaWaterList } from '@/hooks/useAreaWaterList.js';
import AreaEditDialog from './area-edit-dialog.vue';

const {
    areaList: areaData, areaPagination, areaSearchText,
    refreshAreaList, onPageChange, handleSearch,
} = useAreaWaterList();

defineOptions({
    name: 'AreaTable'
});

onMounted(() => {
    refreshAreaList();
});

const editDialogVisible = ref(false);
const editDialogData = ref(null);

// 编辑框显示
const showEditDialog = (data) => {
    editDialogData.value = data;
    editDialogVisible.value = true;
};

const closeEditDialog = () => {
    editDialogVisible.value = false;
};
</script>

<template>
    <div class="area-table">
        <div class="table-top">
            <label for="account-info">地区名：</label>
            <el-input id="account-info" class="search-input" v-model="areaSearchText" placeholder="请输入地区名" />
            <el-button class="button" @click="handleSearch">搜索</el-button>
        </div>
        <div class="table-bottom">
            <el-table :data="areaData" :border="true" style="width: 1040px; margin-bottom: 12px;">
            <el-table-column property="district" label="地区名" width="120" />
            <el-table-column property="month" label="时间" width="120" />
            <el-table-column property="free_chlorine" label="游离氯" width="120" />
            <el-table-column property="ph_value" label="ph值" width="120" />
            <el-table-column property="turbidity" label="浑浊度" width="120" />
            <el-table-column property="platinum_cobalt_color" label="铂钴色度" width="120" />
            <el-table-column property="total_coliform" label="总大肠菌群" width="120" />
            <el-table-column property="total_bacteria" label="菌落总数" width="120" />
            <el-table-column label="操作" width="80">
                <template v-slot="scope" #default>
                    <el-button link type="primary" size="small" @click="showEditDialog(scope.row)">查看</el-button>
                </template>
            </el-table-column>
            </el-table>
            <el-pagination
                layout="total, prev, pager, next, jumper"
                :total="areaPagination.total"
                :page-size="areaPagination.size"
                v-model:current-page="areaPagination.current"
                @current-change="onPageChange"
            />
            <area-edit-dialog v-if="editDialogVisible" :visible="editDialogVisible" :data="editDialogData" @close="closeEditDialog" />
        </div>
    </div>
</template>

<style scoped>
.table-top {
  margin: 25px 0 0 55px;
  
  align-items: center;
}
.table-bottom {
  margin: 25px 0 0 32px;
}
.search-input {
    height: 32px;
    width: 212px;
    padding: 0 22px 0 0;
}
.button:focus:not(.button:hover) {
  background-color: var(--el-button-bg-color);
  border-color: var(--el-button-border-color);
  color: var(--el-button-text-color);
};
</style>
