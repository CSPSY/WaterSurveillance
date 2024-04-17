<script setup>
defineOptions({
    name: 'FactoryTable'
});
</script>

<template>
    <div class="factory-table">
        <div class="table-top">
            <label for="account-info">水厂名：</label>
            <el-input
                id="account-info"
                style="height: 32px; width: 212px; padding: 0 22px 0 0;"
                placeholder="请输入水厂名"
            />
            <el-button class="button" @click="">搜索</el-button>
        </div>
        <div class="table-bottom">
            <el-table
                ref=""
                :data="[]"
                :border="true"
                style="width: 1310px"
            >
            <el-table-column property="id" label="水厂名" width="230" />
            <el-table-column property="id" label="所属地区" width="120" />
            <el-table-column property="accountInfo" label="时间" width="120" />
            <el-table-column property="fullName" label="游离氯" width="120" />
            <el-table-column property="userRole" label="ph值" width="120" />
            <el-table-column property="phoneNumber" label="浑浊度" width="120" />
            <el-table-column property="email" label="铂钴色度" width="120" />
            <el-table-column property="email" label="总大肠菌群" width="120" />
            <el-table-column property="email" label="菌落总数" width="120" />
            <el-table-column label="操作" width="120">
                <template v-slot="scope" #default>
                <el-button link type="primary" size="small" @click="editUserCard(scope.row)">编辑</el-button>
                <el-popconfirm title="确认要删除该用户吗 ？" @confirm="deleteUserById(scope.row.id)">
                    <template #reference>
                        <el-button link type="primary" size="small" @click="">删除</el-button>
                    </template>
                </el-popconfirm>
                </template>
            </el-table-column>
            </el-table>
            <!-- <el-pagination
                style="position: absolute; bottom: 5%; left: 41%;"
                layout="total, prev, pager, next, jumper" :total="data.total"
                :page-size="pageInfo.size"
                v-model:current-page="pageInfo.currentPage"
                @current-change="changeData()"
            /> -->
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
.button:focus:not(.button:hover) {
  background-color: var(--el-button-bg-color);
  border-color: var(--el-button-border-color);
  color: var(--el-button-text-color);
};
</style>
