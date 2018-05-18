<template>
  <div class="bottomOutside">
    <div class="bottomInside">
      <div style="box-sizing: border-box;width: 38%;float: left;padding-right:40px">
        <table style="border-right: 1px solid #99a2aa">
          <tr style="height: 50px">
            <td style="color: #99a2aa;margin-bottom: 50px">bilibili</td>
          </tr>
          <tr>
            <td width="30%">关于我们</td>
            <td width="30%">联系我们</td>
            <td width="40%">加入我们</td>
          </tr>
          <tr>
            <td>友情链接</td>
            <td>bilibili认证</td>
            <td>Investor Relations</td>
          </tr>
          <tr></tr>
        </table>
      </div>

      <div style="box-sizing: border-box;width: 38%;float: left;padding-right:40px">
        <table style="border-right: 1px solid #99a2aa">
          <tr style="height: 50px">
            <td style="color: #99a2aa">传送门</td>
          </tr>
          <tr>
            <td width="30%">帮助中心</td>
            <td width="30%">高级弹幕</td>
            <td width="40%">活动专题页</td>
          </tr>
          <tr>
            <td>侵权申诉</td>
            <td>活动中心</td>
            <td>用户反馈论坛</td>
          </tr>
          <tr>
            <td>壁纸站</td>
            <td>名人堂</td>
          </tr>
        </table>
      </div>

      <div style="box-sizing: border-box;width: 24%;float: left">
        <table>
          <tr></tr>
          <tr>
            <td width="33.3%" align="center"><img src="../../assets/image/60x60r.png"></td>
            <td width="33.3%" align="center"><img src="../../assets/image/60x60r.png"></td>
            <td width="33.3%" align="center"><img src="../../assets/image/60x60r.png"></td>
          </tr>
          <tr>
            <td align="center">客户端下载</td>
            <td align="center">新浪微博</td>
            <td align="center">官方微信</td>
          </tr>
        </table>
      </div>

      <div style="clear: both;position: relative;text-align: center;padding: 20px 0">
        <p><em>author: kooriookami</em></p>
        <p><em>e-mail: bingshuanglingluo@163.com</em></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LayoutBottom"
  }
</script>

<style scoped>
  .bottomOutside {
    min-width: 1160px;
    background-color: #f6f9fa;
    margin-top: 20px;
  }

  .bottomInside {
    width: 1160px;
    padding: 20px 0;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  table {
    width: 100%;
  }

  tr {
    height: 30px;
  }
</style>
