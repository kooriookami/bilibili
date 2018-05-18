<template>
  <div class="main">
    <el-button type="info" plain>
      <div>
        <i class="el-icon-refresh"></i>
        --条新动态
      </div>
    </el-button>
    <el-button type="info" plain>
      <div>
        更多
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "ActiveMore"
  }
</script>

<style scoped>
  .main{
    float: right;
    height: 45px;
    display: flex;
    align-items: center;
  }

  .el-button {
    height: 24px;
    padding: 0 10px;
  }

  .el-button div {
    font-size: 12px;
    display: flex;
    justify-content: center; /*实现水平居中*/
    align-items: center; /*实现垂直居中*/
  }
</style>
