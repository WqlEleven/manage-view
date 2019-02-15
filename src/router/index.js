import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/manageArticle'
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/',
            name: 'home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/publisharticle',
                    component: resolve => require(['../components/page/publisharticle.vue'], resolve),
                    meta: {title: '发布文章'}
                },
                {
                    path: '/manageArticle',
                    name: 'manage',
                    component: resolve => require(['../components/page/manageArticle.vue'], resolve),
                    meta: {title: '文章管理'}
                },
                {
                    path: '/preview',
                    name: 'preview',
                    component: resolve => require(['../components/page/preview.vue'], resolve),
                    meta: {title: '文章预览'}
                },
                {
                    path: '/published',
                    component: resolve => require(['../components/page/published.vue'], resolve),
                    meta: {title: '已发布'}
                },
                {
                    path: '/draft',
                    component: resolve => require(['../components/page/draft.vue'], resolve),
                    meta: {title: '草稿箱'}
                },
                {
                    path: '/editarticle',
                    component: resolve => require(['../components/page/editarticle.vue'], resolve),
                    meta: {title: '文章编辑'}
                },
                {
                    path: '/manageLable',
                    component: resolve => require(['../components/page/manageLable.vue'], resolve),
                    meta: {title: '标签管理'}
                },
                {
                    path: '/lablecheck',
                    component: resolve => require(['../components/page/lablecheck.vue'], resolve),
                    meta: {title: '标签管理查看'}
                },
                {
                    path: '/recyclebin',
                    component: resolve => require(['../components/page/recyclebin.vue'], resolve),
                    meta: {title: '回收站'}
                },
                {
                    path: '/recyclebinCheck',
                    component: resolve => require(['../components/page/recyclebinCheck.vue'], resolve),
                    meta: {title: '回收站查看'}
                },
                {
                    path: '/manageUser',
                    component: resolve => require(['../components/page/manageUser.vue'], resolve),
                    meta: {title: '用户管理'}
                },
                {
                    path: '/revise',
                    component: resolve => require(['../components/page/revise.vue'], resolve),
                    meta: {title: '修改'}
                },
                {
                    path: '/newUser',
                    component: resolve => require(['../components/page/newUser.vue'], resolve),
                    meta: {title: '新增用户'}
                },
                {
                    path: '/manageRole',
                    component: resolve => require(['../components/page/manageRole.vue'], resolve),
                    meta: {title: '角色管理'}
                },
                {
                    path: '/managePower',
                    component: resolve => require(['../components/page/managePower.vue'], resolve),
                    meta: {title: '权限管理'}
                },
                {
                    path: '/addRole',
                    component: resolve => require(['../components/page/addRole.vue'], resolve),
                    meta: {title: '新增角色'}
                },
                {
                    path: '/addDescribe',
                    component: resolve => require(['../components/page/addDescribe.vue'], resolve),
                    meta: {title: '新增权限'}
                },
                {
                    path: '/editPower',
                    component: resolve => require(['../components/page/editPower.vue'], resolve),
                    meta: {title: '修改权限'}
                },
                {
                    path: '/amend',
                    component: resolve => require(['../components/page/amend.vue'], resolve),
                    meta: {title: '修改'}
                },
                {
                    path: '/log',
                    component: resolve => require(['../components/page/log.vue'], resolve),
                    meta: {title: '操作日志'}
                },
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: {title: '系统首页'}
                },
                {
                    path: '/editpwd',
                    component: resolve => require(['../components/page/editpwd.vue'], resolve),
                    meta: {title: '修改密码'}
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: {title: '403'}
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: {title: '404'}
                }
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
    //
})
