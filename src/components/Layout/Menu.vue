<template>
  <div>
    <div class="menu">
      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">首页</span>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">动画</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>MAD·AMV</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>MMD·3D</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>短片·手书·配音</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>综合</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">番剧</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>连载动画</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>完结动画</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>资讯</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>官方延伸</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>新番时间表</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>番剧索引</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">国创</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>国产动画</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>国产原创相关</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>布袋戏</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>资讯</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>新番时间表</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>国产动画索引</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">音乐</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>原创音乐</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>翻唱</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>VOCALOID·UTAU</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>演奏</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>三次元音乐</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>OP/ED/OST</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>音乐选集</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">舞蹈</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>宅舞</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>三次元舞蹈</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>舞蹈教程</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">游戏</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>单机游戏</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>电子竞技</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>手机游戏</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>网络游戏</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>桌游棋牌</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>GMV</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>音游</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>Mugen</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">科技</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>趣味科普人文</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>野生技术协会</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>演讲·公开课</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>星海</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>数码</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>机械</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>汽车</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">生活</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>搞笑</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>日常</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>美食圈</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>动物圈</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>手工</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>绘画</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>ASMR</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>运动</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">鬼畜</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>鬼畜调教</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>音MAD</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>人力VOCALOID</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>教程演示</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">时尚</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>美妆</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>服饰</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>健身</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>资讯</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">广告</span>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">娱乐</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>综艺</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>明星</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>Korea相关</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">影视</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>影视杂谈</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>影视剪辑</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>短片</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>预告·资讯</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>特摄</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">放映厅</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>纪录片</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>电影</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>电视剧</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">专栏</span>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">广场</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>会员购</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>活动中心</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>游戏中心</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>新闻中心</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>画友</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>芒果TV</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">直播</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-arrow-right"></i>推荐主播</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>生活娱乐</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>绘画专区</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>唱见舞见</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>御宅文化</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>单机联机</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>网络游戏</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>电子竞技</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-arrow-right"></i>手机直播</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" placement="bottom-start" show-timeout="0" hide-timeout="100">
        <span class="el-dropdown-link">小黑屋</span>
      </el-dropdown>

      <img src="../../assets/image/shin.gif">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu"
  }
</script>

<style scoped>
  .menu {
    display: flex;
    justify-content: space-between;
  }

  .el-dropdown-link {
    cursor: pointer;
    padding: 10px;
  }

  /*重写element-UI默认的样式*/
  .el-dropdown-menu__item {
    font-size: 12px !important;
    min-width: 100px !important;
    padding: 0 20px 0 10px !important;
  }

  i {
    color: #00a1d6;
    font-weight: bold;
    font-size: 12px;
    margin-right: 5px;
  }
</style>
