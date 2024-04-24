<script setup>
import { onMounted, ref } from 'vue';
import { useFactoryWaterList } from '@/hooks/useFactoryWaterList.js';
import FactoryEditDialog from './factory-edit-dialog.vue';

const {
    factoryList: factoryData, factoryPagination, factorySearchText, districtSearchText, factorySearchMonth,
    refreshFactoryList, onPageChange, handleSearch,
} = useFactoryWaterList();

defineOptions({
    name: 'FactoryTable'
});

onMounted(() => {
    refreshFactoryList();
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

const shortcuts = [
    {
        text: '这个月',
        value: [new Date(), new Date()],
    },
    {
        text: '今年',
        value: () => {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            return [start, end];
        },
    },
    {
        text: '最近六个月',
        value: () => {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            return [start, end];
        },
    },
];
</script>

<template>
    <div class="factory-table">
        <div class="table-top">
            <label for="account-info">水厂名：</label>
            <el-input id="account-info" class="search-input" v-model="factorySearchText" placeholder="水厂名" />
            <label for="account-info">所属地区：</label>
            <el-input id="account-info" class="search-input" v-model="districtSearchText" placeholder="所属地区" />
            <el-date-picker
                v-model="factorySearchMonth" type="monthrange" unlink-panels format="YYYY-MM"
                range-separator="-" start-placeholder="开始月份" end-placeholder="结束月份" :shortcuts="shortcuts"
            />
            <el-button class="button" @click="handleSearch">搜索</el-button>
        </div>
        <div class="table-bottom">
            <el-table :data="factoryData" :border="true" style="width: 1310px; margin-bottom: 12px;">
            <el-table-column property="name" label="水厂名" width="240" />
            <el-table-column property="district" label="所属地区" width="110" />
            <el-table-column property="month" label="时间" width="120" />
            <el-table-column property="free_chlorine" label="游离氯" width="120" />
            <el-table-column property="ph_value" label="ph值" width="120" />
            <el-table-column property="turbidity" label="浑浊度" width="120" />
            <el-table-column property="platinum_cobalt_color" label="铂钴色度" width="120" />
            <el-table-column property="total_coliform" label="总大肠菌群" width="120" />
            <el-table-column property="total_bacteria" label="菌落总数" width="120" />
            <el-table-column label="操作" width="120">
                <template v-slot="scope" #default>
                    <el-button link type="primary" size="small" @click="showEditDialog(scope.row)">编辑</el-button>
                    <el-popconfirm title="确认要删除该用户吗 ？" @confirm="deleteUserById(scope.row.id)">
                        <template #reference>
                            <el-button link type="danger" size="small" @click="">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
            </el-table>
            <el-pagination
                layout="total, prev, pager, next, jumper"
                :total="factoryPagination.total"
                :page-size="factoryPagination.size"
                v-model:current-page="factoryPagination.current"
                @current-change="onPageChange"
            />
            <factory-edit-dialog v-if="editDialogVisible" :visible="editDialogVisible" :data="editDialogData" @close="closeEditDialog" />
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
.button {
    margin-left: 22px;
}
.button:focus:not(.button:hover) {
  background-color: var(--el-button-bg-color);
  border-color: var(--el-button-border-color);
  color: var(--el-button-text-color);
};
</style>
