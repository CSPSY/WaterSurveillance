/**
 * @description 区域信息 hooks
 */
import { reactive, ref } from "vue";
import { getWaterData } from '../api/water.js';

export const useWaterList = () => {

    // 获取水样信息
    const refreshWaterList = async (name, months) => {
        const params = { name, months };
        let resList = [];

        await getWaterData(params).then(res => {
            resList = res.data.data;
        }).catch(err => {
            resList = [];
            ElMessage.error(err.message);
        });

        return resList;
    };

    return { refreshWaterList };
};