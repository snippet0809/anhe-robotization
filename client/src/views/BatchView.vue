<template>
  <div class="table">
    <el-scrollbar>
      <el-table :data="batchData" height="88vh">
        <el-table-column prop="date" label="Date" width="140" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-scrollbar>
  </div>
  <!-- <div class="pagination"> -->
  <el-pagination
    :page-sizes="[10, 20, 30, 40, 50]"
    :total="400"
    background
    layout="total, sizes, prev, pager, next, jumper"
  ></el-pagination>
  <!-- </div> -->
</template>
<script setup lang="ts">
import { ref } from 'vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
}
const batchData = ref(Array.from({ length: 50 }).fill(item))
</script>
<style scoped>
.table {
  height: 88vh;
}
.el-pagination {
  height: 4vh;
  margin: 1vh;
  justify-content: center;
}
</style>
