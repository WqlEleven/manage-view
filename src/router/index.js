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
			path: '/editarticleback',
			component: resolve => require(['../components/page/editarticleback.vue'], resolve)
		},
        {
            path: '/',
			name:'home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
				{
					path: '/publisharticle',
					component: resolve => require(['../components/page/publisharticle.vue'], resolve),
					meta: { title: '发布文章' }
				},
				{
					path: '/manageArticle',
					name:'manage',
					component: resolve => require(['../components/page/manageArticle.vue'], resolve),
					meta: { title: '文章管理' }
				},
				{
					path: '/preview',
					name:'preview',
					component: resolve => require(['../components/page/preview.vue'], resolve),
					meta: { title: '文章预览' }
				},
				{
					path: '/published',
					component: resolve => require(['../components/page/published.vue'], resolve),
					meta: { title: '已发布' }
				},
				{
					path: '/draft',
					component: resolve => require(['../components/page/draft.vue'], resolve),
					meta: { title: '草稿箱' }
				},
				{
					path: '/editarticle',
					component: resolve => require(['../components/page/editarticle.vue'], resolve),
					meta: { title: '文章编辑' }
				},
				{
					path: '/manageLable',
					component: resolve => require(['../components/page/manageLable.vue'], resolve),
					meta: { title: '标签管理' }
				},
				{
					path: '/lablecheck',
					component: resolve => require(['../components/page/lablecheck.vue'], resolve),
					meta: { title: '标签管理查看' }
				},
				{
					path: '/l_editarticle',
					component: resolve => require(['../components/page/l_editarticle.vue'], resolve),
					meta: { title: '编辑' }
				},
				{
					path: '/recyclebin',
					component: resolve => require(['../components/page/recyclebin.vue'], resolve),
					meta: { title: '回收站' }
				},
				{
					path: '/recyclebinCheck',
					component: resolve => require(['../components/page/recyclebinCheck.vue'], resolve),
					meta: { title: '回收站查看' }
				},
				{
					path: '/manageUser',
					component: resolve => require(['../components/page/manageUser.vue'], resolve),
					meta: { title: '用户管理' }
				},
				{
					path: '/detail',
					component: resolve => require(['../components/page/detail.vue'], resolve),
					meta: { title: '详情' }
				},
				{
					path: '/revise',
					component: resolve => require(['../components/page/revise.vue'], resolve),
					meta: { title: '修改' }
				},
				{
					path: '/reset',
					component: resolve => require(['../components/page/reset.vue'], resolve),
					meta: { title: '重置密码' }
				},
				{
					path: '/newUser',
					component: resolve => require(['../components/page/newUser.vue'], resolve),
					meta: { title: '新增用户' }
				},
				{
					path: '/manageRole',
					component: resolve => require(['../components/page/manageRole.vue'], resolve),
					meta: { title: '角色管理' }
				},
				{
					path: '/addRole',
					component: resolve => require(['../components/page/addRole.vue'], resolve),
					meta: { title: '新增角色' }
				},
				{
					path: '/amend',
					component: resolve => require(['../components/page/amend.vue'], resolve),
					meta: { title: '修改' }
				},
				{
					path: '/configuration',
					component: resolve => require(['../components/page/BaseForm.vue'], resolve),
					meta: { title: '权限配置' }
				},
				{
					path: '/log',
					component: resolve => require(['../components/page/log.vue'], resolve),
					meta: { title: '操作日志' }
				},
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/editpwd',
                    component: resolve => require(['../components/page/editpwd.vue'], resolve)
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },

                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: resolve => require(['../components/page/DragDialog.vue'], resolve),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
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
