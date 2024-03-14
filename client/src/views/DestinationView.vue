<template>
  <el-button type="primary" class="create">新增流向</el-button>
  <el-table :data="tableData" stripe show-overflow-tooltip>
    <el-table-column fixed prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="操作" fixed="right">
      <el-button type="danger" size="small">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const tableData = Array.from({ length: 10 }).fill({
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home'
})
</script>
<style scoped>
.create {
  margin: 1vh 0 0 1vh;
}
</style>
