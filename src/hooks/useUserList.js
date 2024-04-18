/**
 * @description 区域信息 hooks
 */
import { reactive, ref } from "vue";
import { getUserData } from "@/api/user";

export const useUserList = () => {
    const userList = ref([]);
    const userSearchText = ref('');
    const userPagination = reactive({
        total: 0,
        current: 1,
        size: 10,
    });

    // 获取用户信息
    const refreshUserList = async () => {
        const res = await getUserData(
            userPagination.current,
            userPagination.size,
            userSearchText.value
        );

        userList.value = res?.data?.data?.items || [];
        userPagination.total = res?.data?.data?.total ?? 0;

        return res;
    };

    // 分页操作
    const onPageChange = (currentPage) => {
        userPagination.current = currentPage;
        refreshUserList();
    };

    // 搜索操作
    const handleSearch = () => {
        // 将当前页重置为第一页，然后刷新列表
        userPagination.current = 1;
        refreshUserList();
    };

    return {
        userList, userPagination, userSearchText,
        refreshUserList, onPageChange, handleSearch
    };
};