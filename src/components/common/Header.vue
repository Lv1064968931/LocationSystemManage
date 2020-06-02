<template>
    <div>
       <el-menu default-active="active_index" class="menu_index" mode="horizontal" @select="handle_select" background-color="#545c64" text-color="#ffffff">
           <el-menu-item index="1">处理中心</el-menu-item>
           <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-submenu index="2-3">
            <template slot="title">选项3</template>
            <el-menu-item index="2-3-1">选项1</el-menu-item>
            <el-menu-item index="2-3-2">选项2</el-menu-item>
            </el-submenu>
           </el-submenu>
           <el-menu-item index="3">消息中心</el-menu-item>
           <el-menu-item index="4">数据管理</el-menu-item>
       </el-menu>
       <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            active_index: '1'
        }
    },
    methods: {
        handle_select (key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
