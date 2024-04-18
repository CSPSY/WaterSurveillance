/**
 * @description 路由配置
 */
import { createRouter, createWebHistory } from "vue-router";
import { getUserInfo } from '@/api/user.js';
import { useGlobalStore } from '@/stores/store.js';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/view-index.vue'),
        meta: {
            title: '首页',
            isAdmin: false,
            needAuth: false
        }
    },
    {
        path: '/map',
        name: 'map',
        component: () => import('@/views/map/view-index.vue'),
        meta: {
            title: '区域',
            isAdmin: false,
            needAuth: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/view-index.vue'),
        meta: {
            title: '更多信息',
            isAdmin: false,
            needAuth: false
        }
    },
    {
        path: '/admin/login',
        name: 'admin-login',
        component: () => import('@/views/admin/login/view-index.vue'),
        meta: {
            title: '后台管理登录',
            isAdmin: false,
            needAuth: false
        }
    },
    {
        path: '/admin',
        redirect: '/admin/water',
        name: 'admin-index',
        meta: {
            title: '后台管理',
            isAdmin: true,
            needAuth: true
        },
    },
    {
        path: '/admin/water',
        name: 'admin-water',
        component: () => import('@/views/admin/water/view-index.vue'),
        meta: {
            title: '水样信息管理',
            isAdmin: true,
            needAuth: true
        }
    },
    {
        path: '/admin/auth',
        name: 'admin-auth',
        component: () => import('@/views/admin/auth/view-index.vue'),
        meta: {
            title: '权限管理',
            isAdmin: true,
            needAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from) => {
    const { menuStore, userStore } = useGlobalStore();

    // 路由守卫鉴权
    if (localStorage.getItem('WSV_TOKEN')) {
        await getUserInfo().then((res) => {
            if (res.data.errno !== 0) {
                throw new Error(res.data.message);
            }
            userStore.login({
                ...res.data?.data?.user
            });
        }).catch(err => {
            ElMessage.error(err.message);
        });
    }
    if (to.meta.needAuth && !userStore.isLogin) {
        return { name: 'admin-login' };
    }

    if (to.meta.isAdmin) {
        menuStore.setShowValue(true);
    } else {
        menuStore.setShowValue(false);
    }
    // 路由发送变化时，更改页面 title
    if (to.meta.title) {
        document.title = '水样监测 | ' + to.meta.title
    }
});

export { router };