/**
 * @description 水样 接口
 */
import API from "./base.js";

// 获取水样数据
export const getWaterData = (params) => {
    return API.get('/water/data', { params })
};