<template>
  <div>
    <div class="menu">
      <el-dropdown size="medium">
        <span class="el-dropdown-link">首页</span>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">动画</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>MAD·AMV</el-dropdown-item>
          <el-dropdown-item>MMD·3D</el-dropdown-item>
          <el-dropdown-item>短片·手书·配音</el-dropdown-item>
          <el-dropdown-item>综合</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">番剧</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>连载动画</el-dropdown-item>
          <el-dropdown-item>完结动画</el-dropdown-item>
          <el-dropdown-item>资讯</el-dropdown-item>
          <el-dropdown-item>官方延伸</el-dropdown-item>
          <el-dropdown-item>新番时间表</el-dropdown-item>
          <el-dropdown-item>番剧索引</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">国创</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>国产动画</el-dropdown-item>
          <el-dropdown-item>国产原创相关</el-dropdown-item>
          <el-dropdown-item>布袋戏</el-dropdown-item>
          <el-dropdown-item>资讯</el-dropdown-item>
          <el-dropdown-item>新番时间表</el-dropdown-item>
          <el-dropdown-item>国产动画索引</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">音乐</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>原创音乐</el-dropdown-item>
          <el-dropdown-item>翻唱</el-dropdown-item>
          <el-dropdown-item>VOCALOID·UTAU</el-dropdown-item>
          <el-dropdown-item>演奏</el-dropdown-item>
          <el-dropdown-item>三次元音乐</el-dropdown-item>
          <el-dropdown-item>OP/ED/OST</el-dropdown-item>
          <el-dropdown-item>音乐选集</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">舞蹈</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>宅舞</el-dropdown-item>
          <el-dropdown-item>三次元舞蹈</el-dropdown-item>
          <el-dropdown-item>舞蹈教程</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">游戏</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>单机游戏</el-dropdown-item>
          <el-dropdown-item>电子竞技</el-dropdown-item>
          <el-dropdown-item>手机游戏</el-dropdown-item>
          <el-dropdown-item>网络游戏</el-dropdown-item>
          <el-dropdown-item>桌游棋牌</el-dropdown-item>
          <el-dropdown-item>GMV</el-dropdown-item>
          <el-dropdown-item>音游</el-dropdown-item>
          <el-dropdown-item>Mugen</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">科技</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>趣味科普人文</el-dropdown-item>
          <el-dropdown-item>野生技术协会</el-dropdown-item>
          <el-dropdown-item>演讲·公开课</el-dropdown-item>
          <el-dropdown-item>星海</el-dropdown-item>
          <el-dropdown-item>数码</el-dropdown-item>
          <el-dropdown-item>机械</el-dropdown-item>
          <el-dropdown-item>汽车</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">生活</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>搞笑</el-dropdown-item>
          <el-dropdown-item>日常</el-dropdown-item>
          <el-dropdown-item>美食圈</el-dropdown-item>
          <el-dropdown-item>动物圈</el-dropdown-item>
          <el-dropdown-item>手工</el-dropdown-item>
          <el-dropdown-item>绘画</el-dropdown-item>
          <el-dropdown-item>ASMR</el-dropdown-item>
          <el-dropdown-item>运动</el-dropdown-item>
          <el-dropdown-item>其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">鬼畜</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>鬼畜调教</el-dropdown-item>
          <el-dropdown-item>音MAD</el-dropdown-item>
          <el-dropdown-item>人力VOCALOID</el-dropdown-item>
          <el-dropdown-item>教程演示</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">时尚</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>美妆</el-dropdown-item>
          <el-dropdown-item>服饰</el-dropdown-item>
          <el-dropdown-item>健身</el-dropdown-item>
          <el-dropdown-item>资讯</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">广告</span>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">娱乐</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>综艺</el-dropdown-item>
          <el-dropdown-item>明星</el-dropdown-item>
          <el-dropdown-item>Korea相关</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">影视</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>影视杂谈</el-dropdown-item>
          <el-dropdown-item>影视剪辑</el-dropdown-item>
          <el-dropdown-item>短片</el-dropdown-item>
          <el-dropdown-item>预告·资讯</el-dropdown-item>
          <el-dropdown-item>特摄</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">放映厅</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>纪录片</el-dropdown-item>
          <el-dropdown-item>电影</el-dropdown-item>
          <el-dropdown-item>电视剧</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">专栏</span>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">广场</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>会员购</el-dropdown-item>
          <el-dropdown-item>活动中心</el-dropdown-item>
          <el-dropdown-item>游戏中心</el-dropdown-item>
          <el-dropdown-item>新闻中心</el-dropdown-item>
          <el-dropdown-item>画友</el-dropdown-item>
          <el-dropdown-item>芒果TV</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium">
        <span class="el-dropdown-link">直播</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>推荐主播</el-dropdown-item>
          <el-dropdown-item>生活娱乐</el-dropdown-item>
          <el-dropdown-item>绘画专区</el-dropdown-item>
          <el-dropdown-item>唱见舞见</el-dropdown-item>
          <el-dropdown-item>御宅文化</el-dropdown-item>
          <el-dropdown-item>单机联机</el-dropdown-item>
          <el-dropdown-item>网络游戏</el-dropdown-item>
          <el-dropdown-item>电子竞技</el-dropdown-item>
          <el-dropdown-item>手机直播</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="medium">
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
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-dropdown-menu__item {
    font-size: 12px !important;
  }
</style>
