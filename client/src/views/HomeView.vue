<template>
  <el-container class="layout-container-demo">
    <el-header>
      <div class="title">
        <h2>安和自动化</h2>
      </div>
      <div class="toolbar">
        <el-dropdown>
          <el-icon class="setting"><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </div>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu>
            <el-menu-item index="1" @click="clickMenuItem">
              <el-icon><Notebook /></el-icon>
              <span>档案管理</span>
            </el-menu-item>
            <el-menu-item index="2" @click="clickMenuItem">
              <el-icon><Guide /></el-icon>
              <span>批次管理</span>
            </el-menu-item>
            <el-menu-item index="3" @click="clickMenuItem">
              <el-icon><Promotion /></el-icon>
              <span>规格管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="clickMenuItem">
              <el-icon><DArrowRight /></el-icon>
              <span>流向管理</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main><RouterView></RouterView></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import router from '@/router'
import { DArrowRight, Guide, Notebook, Promotion, Setting } from '@element-plus/icons-vue'
const clickMenuItem = (obj: any) => {
  if (obj.index === '1') {
    router.push({ path: '/home/batch' })
  } else if (obj.index === '2') {
    router.push({ path: '/home/batch' })
  } else if (obj.index === '3') {
    router.push({ path: '/home/specification' })
  } else if (obj.index === '4') {
    router.push({ path: '/home/destination' })
  } else {
    router.push({ path: '/home/batch' })
  }
}
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.el-header {
  height: 6vh;
  text-align: right;
  font-size: 12px;
}
.el-main {
  height: 94vh;
}
.title {
  display: inline-flex;
  align-items: center;
  height: 100%;
  left: 20px;
  float: left;
}
.setting {
  margin-top: 1px;
  margin-right: 8px;
}
</style>
