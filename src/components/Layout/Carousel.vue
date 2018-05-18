<!--走马灯-->
<template>
  <div>
    <el-carousel class="grid-margin" interval="5000" trigger="click" height="220px">
      <el-carousel-item v-for="item in 5">
        <router-link to="/404">
          <img src="../../assets/image/main.png">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
  }
</script>

<style scoped>
</style>
