/**
 * @description 区域信息 hooks
 */
import { reactive, ref } from "vue";
import { getWaterFactoryList } from '@/api/water.js';

export const useFactoryWaterList = () => {
    const factoryList = ref([]);
    const factorySearchText = ref('');
    const factoryPagination = reactive({
        total: 0,
        current: 1,
        size: 4
    });

    // 获取水厂水样信息
    const refreshFactoryList = async () => {
        const res = await getWaterFactoryList(
            factoryPagination.current,
            factoryPagination.size,
            factorySearchText.value
        );

        factoryList.value = res?.data?.data?.items || [];
        factoryPagination.total = res?.data?.data?.total ?? 0;
    };

    // 分页操作
    const onPageChange = (currentPage) => {
        factoryPagination.current = currentPage;
        refreshFactoryList();
    };

    // 搜索操作
    const handleSearch = () => {
        factoryPagination.current = 1;
        refreshFactoryList();
    };

    return {
        factoryList, factoryPagination, factorySearchText,
        refreshFactoryList, onPageChange, handleSearch
    };
};