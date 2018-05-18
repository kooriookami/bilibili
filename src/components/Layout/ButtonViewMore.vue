<template>
  <div style="text-align: center">
    <el-button type="info" plain>
      <div>
        查看更多
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "ButtonViewMore"
  }
</script>

<style scoped>
  .el-button {
    height: 26px;
    width: 260px;
    padding: 0;
  }

  .el-button div {
    font-size: 12px;
    display: flex;
    justify-content: center; /*实现水平居中*/
    align-items: center; /*实现垂直居中*/
  }
</style>
