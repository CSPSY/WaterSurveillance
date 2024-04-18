/**
 * @description 区域信息 hooks
 */
import { getWaterDataDistrict, getWaterDataFactory } from '@/api/water.js';

export const useWaterList = () => {

    // 获取水样信息 --- 区/市
    const refreshWaterAreaList = async (name, months) => {
        const params = { name, months };
        let resList = [];

        await getWaterDataDistrict(params).then(res => {
            resList = res.data.data;
        }).catch(err => {
            resList = [];
            ElMessage.error(err.message);
        });

        return resList;
    };

    // 获取水样信息 --- 水厂
    const refreshWaterFactoryList = async (name, months) => {
        const params = { name, months };
        let resList = [];

        await getWaterDataFactory(params).then(res => {
            resList = res.data.data;
        }).catch(err => {
            resList = [];
            ElMessage.error(err.message);
        });

        return resList;
    };

    return {
        refreshWaterAreaList, refreshWaterFactoryList
    };
};