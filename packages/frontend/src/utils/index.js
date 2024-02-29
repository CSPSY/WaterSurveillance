/**
 * @description 工具类
 */
import { router } from "../router";

// 路由跳转
const jumpSummaryPage = () => {
    router.push('/');
}

const jumpMapPage = () => {
    router.push('/map');
}

const jumpAboutPage = () => {
    router.push('/about');
}

export { jumpSummaryPage, jumpMapPage, jumpAboutPage };