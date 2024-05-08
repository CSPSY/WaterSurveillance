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

// 管理员登录
export const loginAdmin = (postObj) => {
    return API.post('/user/login', postObj);
};

// 获取登录信息
export const getUserInfo = () => {
    return API.get('/user/info');
};

// 编辑用户信息
export const editUserInfo = (data) => {
    return API.put(`/user/${data.id}`, data);
}
