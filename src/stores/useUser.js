/**
 * @description user
 */
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const isLogin = ref(false);

    const userInfo = reactive({
        id: 0,
        email: '',
        telephone: '',
        username: '',
        realname: '',
        role: '',
    });

    const login = (data) => {
        userInfo.id = data.id;
        userInfo.email = data.email;
        userInfo.telephone = data.telephone;
        userInfo.username = data.username;
        userInfo.realname = data.realname;
        userInfo.role = data.role;
        isLogin.value = true;
    };

    const logout = () => {
        userInfo.id = 0;
        userInfo.email = '';
        userInfo.telephone = '';
        userInfo.username = '';
        userInfo.realname = '';
        userInfo.role = '';
        isLogin.value = false;
        localStorage.removeItem('WSV_TOKEN');
    };

    return { userInfo, login, isLogin, logout };
});