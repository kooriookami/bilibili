<template>
  <div style="background-color: #f4f5f7">
    <div style="height: 100px">
    </div>
    <div class="box">
      <div>
        <img src="../assets/image/no_video.png"/>
      </div>
      <div>
        <div>
          <h1>
            啊叻？视频不见了？
          </h1>
        </div>
        <div>
          <router-link to="/">
            <el-button type="primary">返回首页</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div style="height: 100px">
    </div>
  </div>
</template>

<script>
  export default {
    name: "error",
  }
</script>

<style scoped>
  .box {
    width: 980px;
    border-radius: 10px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 50px 0;
  }

  h1 {
    font-size: 26px;
  }
</style>
