<template>
  <el-button type="primary" class="create">新增规格</el-button>
  <el-card>
    <el-descriptions title="小号">
      <template #extra>
        <el-button type="danger">删除</el-button>
      </template>
      <el-descriptions-item label="高度">1m</el-descriptions-item>
      <el-descriptions-item label="半径">20cm</el-descriptions-item>
      <el-descriptions-item label="容量">30L</el-descriptions-item>
      <el-descriptions-item label="有效期">2年</el-descriptions-item>
      <el-descriptions-item label="预留信息">无 </el-descriptions-item>
    </el-descriptions>
  </el-card>
  <el-card>
    <el-descriptions title="中号">
      <template #extra>
        <el-button type="danger">删除</el-button>
      </template>
      <el-descriptions-item label="高度">1m</el-descriptions-item>
      <el-descriptions-item label="半径">20cm</el-descriptions-item>
      <el-descriptions-item label="容量">30L</el-descriptions-item>
      <el-descriptions-item label="有效期">2年</el-descriptions-item>
      <el-descriptions-item label="预留信息">无 </el-descriptions-item>
    </el-descriptions>
  </el-card>
  <el-card body-class="card">
    <el-descriptions title="大号">
      <template #extra>
        <el-button type="danger">删除</el-button>
      </template>
      <el-descriptions-item label="高度">1m</el-descriptions-item>
      <el-descriptions-item label="半径">20cm</el-descriptions-item>
      <el-descriptions-item label="容量">30L</el-descriptions-item>
      <el-descriptions-item label="有效期">2年</el-descriptions-item>
      <el-descriptions-item label="预留信息">无 </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped>
.create,
.el-card {
  margin: 3vh 3vh 0 3vh;
}
.cell-item {
  display: flex;
  align-items: center;
}
</style>
