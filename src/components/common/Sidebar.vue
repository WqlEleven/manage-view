<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else-if="authority_list.indexOf(subItem.code) != -1" :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-copy',
                        index: '3',
                        title: '内容管理',
                        subs: [
                            {
                                index: 'ArticleAdd',
                                title: '发布文章',
                                code: 'publish'
                            },
                            {
                                index: 'ArticleList',
                                title: '文章管理',
                                code: 'article'
                            },
                            {
                                index: 'TagList',
                                title: '标签管理',
                                code: 'tag'
                            },
                            {
                                index: 'RecycleBin',
                                title: '回收站',
                                code: 'recycle'
                            }
                        ]

                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'tabs',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'AdminList',
                                title: '用户管理',
                                code: 'admin'
                            },
                            {
                                index: 'RoleList',
                                title: '角色管理',
                                code: 'role'
                            },
                            {
                                index: 'AuthorityList',
                                title: '权限管理',
                                code: 'authority'
                            }
                        ]
                    },
                    // {
                    //     icon: 'el-icon-lx-home',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                ],
                authority_list: []
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        },
        mounted() {
            this.getAuthorityList();
        },
        methods: {
            getAuthorityList() {
                this.$axios.post(
                    '/admin/authority_user',
                    this.$qs.stringify({})
                ).then((res) => {
                    //console.log(res);
                    if (res.data.code == -1) {
                        this.$message.warning('请登录！');
                        this.$router.push('/login');
                    } else if (res.data.code == 0) {
                        this.authority_list = res.data.data.list
                    } else {
                        this.$message.warning(res.data.message);
                    }
                }).catch((res) => {
                    console.log(res);
                });
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
