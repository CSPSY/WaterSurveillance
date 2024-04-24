/**
 * @description 区域信息 hooks
 */
import { reactive, ref } from "vue";
import { getWaterAreaList } from '@/api/water.js';

export const useAreaWaterList = () => {
    const areaList = ref([]);
    const areaSearchText = ref('');
    const areaSearchMonth = ref('');
    const areaPagination = reactive({
        total: 0,
        current: 1,
        size: 4
    });

    // 获取区域水样信息
    const refreshAreaList = async () => {
        const startTime = { year: '', month: '' };
        const endTime = { year: '', month: '' };
        if (areaSearchMonth.value) {
            startTime.year = areaSearchMonth.value[0].getFullYear();
            startTime.month = areaSearchMonth.value[0].getMonth()+1;
            endTime.year = areaSearchMonth.value[1].getFullYear();
            endTime.month = areaSearchMonth.value[1].getMonth()+1;
            if (startTime.month < 10) { startTime.month = '0' + startTime.month; }
            if (endTime.month < 10) { endTime.month = '0' + endTime.month; }
        }
        const startMonth = startTime.year ? startTime.year+'-'+startTime.month : '';
        const endMonth = endTime.year ? endTime.year+'-'+endTime.month : '';
        const res = await getWaterAreaList(
            areaPagination.current,
            areaPagination.size,
            areaSearchText.value,
            startMonth,
            endMonth,
        );

        areaList.value = res?.data?.data?.items || [];
        areaPagination.total = res?.data?.data?.total ?? 0;
    };

    // 分页操作
    const onPageChange = (currentPage) => {
        areaPagination.current = currentPage;
        refreshAreaList();
    };

    // 搜索操作
    const handleSearch = () => {
        areaPagination.current = 1;
        refreshAreaList();
    };

    return {
        areaList, areaPagination, areaSearchText, areaSearchMonth,
        refreshAreaList, onPageChange, handleSearch
    };
};