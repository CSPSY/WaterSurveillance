<script setup>
import { onMounted } from 'vue';
import { useUserList } from '@/hooks/useUserList.js';
import { userRole } from '@/utils/user.js';

defineOptions({
    name: 'UserTable'
});

const {
    userList: userData, userPagination, userSearchText,
    refreshUserList, onPageChange, handleSearch,
} = useUserList();

onMounted(() => {
    refreshUserList();
});

const formatterRole = (row) => {
    return userRole[row.role];
};
</script>

<template>
    <div class="main-container">
        <div class="main-top">
            <label for="account-info">用户名：</label>
            <el-input id="account-info" class="search-input" v-model="userSearchText" placeholder="请输入用户名" />
            <el-button class="button" @click="handleSearch">搜索</el-button>
            <el-button class="button" @click="">添加用户</el-button>
        </div>
        <div class="main-bottom">
            <el-table :data="userData" :border="true" style="width: 1080px; margin-bottom: 12px;">
                <el-table-column property="id" label="用户 ID" width="170" />
                <el-table-column property="username" label="用户名" width="130" />
                <el-table-column property="realname" label="姓名" width="120" />
                <el-table-column property="role" label="用户角色" width="120" :formatter="formatterRole" />
                <el-table-column property="telephone" label="电话号码" width="140" />
                <el-table-column property="email" label="邮箱" width="280" />
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
                :total="userPagination.total"
                :page-size="userPagination.size"
                v-model:current-page="userPagination.current"
                @current-change="onPageChange"
            />
        </div>
    </div>
</template>

<style scoped>
.main-container {
    background-color: #fff;
    width: 100%;
    padding: 16px;
}
.main-top {
  margin: 25px 0 0 55px;
  display: flex;
  
  align-items: center;
}
.main-bottom {
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
