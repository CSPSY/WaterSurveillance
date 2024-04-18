/**
 * @description 用户 接口
 */
import API from "./base.js";

// 获取用户数据
export const getUserData = (page, size, search) => {
    return API.get('/user/data', {
        params: {
            page, size, search
        }
    });
};