/**
 * @description 区域信息 hooks
 */
import { reactive, ref } from "vue";
import { getWaterFactoryList } from '@/api/water.js';

export const useFactoryWaterList = () => {
    const factoryList = ref([]);
    const factorySearchText = ref('');
    const districtSearchText = ref('');
    const factorySearchMonth = ref('');
    const factoryPagination = reactive({
        total: 0,
        current: 1,
        size: 4
    });

    // 获取水厂水样信息
    const refreshFactoryList = async () => {
        const startTime = { year: '', month: '' };
        const endTime = { year: '', month: '' };
        if (factorySearchMonth.value) {
            startTime.year = factorySearchMonth.value[0].getFullYear();
            startTime.month = factorySearchMonth.value[0].getMonth()+1;
            endTime.year = factorySearchMonth.value[1].getFullYear();
            endTime.month = factorySearchMonth.value[1].getMonth()+1;
            if (startTime.month < 10) { startTime.month = '0' + startTime.month; }
            if (endTime.month < 10) { endTime.month = '0' + endTime.month; }
        }
        const startMonth = startTime.year ? startTime.year+'-'+startTime.month : '';
        const endMonth = endTime.year ? endTime.year+'-'+endTime.month : '';
        const res = await getWaterFactoryList(
            factoryPagination.current,
            factoryPagination.size,
            factorySearchText.value,
            districtSearchText.value,
            startMonth,
            endMonth
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
        factoryList, factoryPagination, factorySearchText, districtSearchText, factorySearchMonth,
        refreshFactoryList, onPageChange, handleSearch
    };
};