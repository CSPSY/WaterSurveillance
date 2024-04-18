/**
 * @description 水样 接口
 */
import API from "./base.js";

// 获取水样数据
export const getWaterDataDistrict = (params) => {
    return API.get('/water/data/district', { params });
};

export const getWaterDataFactory = (params) => {
    return API.get('/water/data/factory', { params });
};

export const getWaterAreaList = (page, size, search) => {
    return API.get('/water/area-list', {
        params: {
            page, size, search
        }
    });
};

export const getWaterFactoryList = (page, size, search) => {
    return API.get('/water/factory-list', {
        params: {
            page, size, search
        }
    });
};