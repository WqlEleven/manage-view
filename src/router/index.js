import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/ArticleList'
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
                    path: '/ArticleAdd',
                    component: resolve => require(['../components/page/ArticleAdd.vue'], resolve),
                    meta: {title: '发布文章'}
                },
                {
                    path: '/ArticleList',
                    name: 'manage',
                    component: resolve => require(['../components/page/ArticleList.vue'], resolve),
                    meta: {title: '文章管理'}
                },
                {
                    path: '/ArticleEdit',
                    component: resolve => require(['../components/page/ArticleEdit.vue'], resolve),
                    meta: {title: '文章编辑'}
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
                    path: '/TagList',
                    component: resolve => require(['../components/page/TagList.vue'], resolve),
                    meta: {title: '标签管理'}
                },
                {
                    path: '/TagArticle',
                    component: resolve => require(['../components/page/TagArticle.vue'], resolve),
                    meta: {title: '标签管理查看'}
                },
                {
                    path: '/RecycleBin',
                    component: resolve => require(['../components/page/RecycleBin.vue'], resolve),
                    meta: {title: '回收站'}
                },
                {
                    path: '/AdminList',
                    component: resolve => require(['../components/page/AdminList.vue'], resolve),
                    meta: {title: '用户管理'}
                },
                {
                    path: '/AdminEdit',
                    component: resolve => require(['../components/page/AdminEdit.vue'], resolve),
                    meta: {title: '修改'}
                },
                {
                    path: '/AdminAdd',
                    component: resolve => require(['../components/page/AdminAdd.vue'], resolve),
                    meta: {title: '新增用户'}
                },
                {
                    path: '/RoleAdd',
                    component: resolve => require(['../components/page/RoleAdd.vue'], resolve),
                    meta: {title: '新增角色'}
                },
                {
                    path: '/RoleList',
                    component: resolve => require(['../components/page/RoleList.vue'], resolve),
                    meta: {title: '角色管理'}
                },
                {
                    path: '/RoleEdit',
                    component: resolve => require(['../components/page/RoleEdit.vue'], resolve),
                    meta: {title: '角色修改'}
                },
                {
                    path: '/AuthorityAdd',
                    component: resolve => require(['../components/page/AuthorityAdd.vue'], resolve),
                    meta: {title: '新增权限'}
                },
                {
                    path: '/AuthorityList',
                    component: resolve => require(['../components/page/AuthorityList.vue'], resolve),
                    meta: {title: '权限管理'}
                },
                {
                    path: '/AuthorityEdit',
                    component: resolve => require(['../components/page/AuthorityEdit.vue'], resolve),
                    meta: {title: '修改权限'}
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
                    path: '/EditPassword',
                    component: resolve => require(['../components/page/EditPassword.vue'], resolve),
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
