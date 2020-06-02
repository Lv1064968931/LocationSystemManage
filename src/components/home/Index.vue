<template>
    <el-container>
        <el-header><Header/></el-header>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                >
            <el-table-column
                prop="device_name"
                label="设备名"
                min-width="2">
            </el-table-column>
            <el-table-column
                prop="device_major"
                label="major"
                min-width="3">
            </el-table-column>
            <el-table-column
                prop="device_minor"
                label="minor"
                min-width="3">
            </el-table-column>
            <el-table-column
                prop="device_rssi"
                label="rssi"
                min-width="2">
            </el-table-column>
            </el-table>
        <el-footer><Footer/></el-footer>
    </el-container>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Right from '@/components/common/Right.vue'
export default {
    name: 'Index',
    components: { Header, Footer, Right },
    data () {
        return {
            tableData: [{
                device_name: 'ibeacon1',
                device_major: '1',
                device_minor: '123',
                device_rssi: '549'
            },
            {
                device_name: 'ibeacon2',
                device_major: '1',
                device_minor: '1236',
                device_rssi: '549'
            },
            {
                device_name: 'ibeacon3',
                device_major: '1',
                device_minor: '1235',
                device_rssi: '549'
            },
            {
                device_name: 'ibeacon4',
                device_major: '1',
                device_minor: '1234',
                device_rssi: '549'
            }
            ]
        }
    }
}
</script>

<style scoped>
.el-container{
 height: 100%;
 padding: 0;
 margin: 0;
 width: 100%;
}
.el-header{
    padding: 0;
}
.el-footer{
    padding: 460px 0 0 0;
}
</style>
