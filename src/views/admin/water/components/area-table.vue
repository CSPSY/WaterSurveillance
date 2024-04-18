<script setup>
import { onMounted } from 'vue';
import { useAreaWaterList } from '@/hooks/useAreaWaterList.js';

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
</script>

<template>
    <div class="area-table">
        <div class="table-top">
            <label for="account-info">地区名：</label>
            <el-input id="account-info" class="search-input" v-model="areaSearchText" placeholder="请输入地区名" />
            <el-button class="button" @click="handleSearch">搜索</el-button>
        </div>
        <div class="table-bottom">
            <el-table :data="areaData" :border="true" style="width: 1080px; margin-bottom: 12px;">
            <el-table-column property="district" label="地区名" width="120" />
            <el-table-column property="month" label="时间" width="120" />
            <el-table-column property="free_chlorine" label="游离氯" width="120" />
            <el-table-column property="ph_value" label="ph值" width="120" />
            <el-table-column property="turbidity" label="浑浊度" width="120" />
            <el-table-column property="platinum_cobalt_color" label="铂钴色度" width="120" />
            <el-table-column property="total_coliform" label="总大肠菌群" width="120" />
            <el-table-column property="total_bacteria" label="菌落总数" width="120" />
            <el-table-column label="操作" width="120">
                <template v-slot="scope" #default>
                <el-button link type="primary" size="small" @click="editUserCard(scope.row)">编辑</el-button>
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
                :total="areaPagination.total"
                :page-size="areaPagination.size"
                v-model:current-page="areaPagination.current"
                @current-change="onPageChange"
            />
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
