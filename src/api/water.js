/**
 * @description 水样 接口
 */
import API from "./base.js";

// 获取水样信息 --- 区/市
export const getWaterDataDistrict = (params) => {
    return API.get('/water/data/district', { params });
};

// 获取水样信息 --- 水厂
export const getWaterDataFactory = (params) => {
    return API.get('/water/data/factory', { params });
};

// 获取区域水样信息
export const getWaterAreaList = (page, size, search, startTime, endTime) => {
    return API.get('/water/area-list', {
        params: {
            page, size, search, startTime, endTime
        }
    });
};

// 获取水厂水样信息
export const getWaterFactoryList = (page, size, factoryName, districtName, startTime, endTime) => {
    return API.get('/water/factory-list', {
        params: {
            page, size, factoryName, districtName, startTime, endTime
        }
    });
};

// 删除水厂水样信息
export const deleteWaterFactoryInfo = (id) => {
    return API.delete(`/water/factory/${id}`);
};

// 编辑水厂水样信息
export const editWaterFactoryInfo = (data) => {
    return API.put(`/water/factory/${data.id}`, data);
};

export const createWaterFactoryInfo = (data) => {
    return API.post(`/water/factory/info`, data);
};