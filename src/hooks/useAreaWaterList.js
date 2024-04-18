/**
 * @description 区域信息 hooks
 */
import { reactive, ref } from "vue";
import { getWaterAreaList } from '@/api/water.js';

export const useAreaWaterList = () => {
    const areaList = ref([]);
    const areaSearchText = ref('');
    const areaPagination = reactive({
        total: 0,
        current: 1,
        size: 4
    });

    // 获取区域水样信息
    const refreshAreaList = async () => {
        const res = await getWaterAreaList(
            areaPagination.current,
            areaPagination.size,
            areaSearchText.value
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
        areaList, areaPagination, areaSearchText,
        refreshAreaList, onPageChange, handleSearch
    };
};