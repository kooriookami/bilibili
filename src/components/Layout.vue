<template>
  <div>
    <div class="background" style="margin-bottom: 10px">
      <div class="logo">
        <div style="position: absolute;left: 20px;bottom: 10px">
          <a href="http://danmaku.kooriookami.top/">
            <img src="../../src/assets/image/autumn.png">
          </a>
        </div>
        <div style="position: absolute;right: 0;bottom: 20px">
          <el-input v-model="search" style="width: 270px;vertical-align: middle" size="small"
                    :placeholder="placeholder" @keydown.enter.native="send">
            <el-button slot="append" icon="el-icon-search" @click="send"></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <div style="width: 1160px;margin-left: auto;margin-right: auto">
      <!--分区-->
      <el-row>
        <el-col :span="24">
          <div class="grid-margin" style="height: 50px;line-height: 50px">
            <Menu></Menu>
          </div>
        </el-col>
      </el-row>

      <!--顶层视频-->
      <el-row type="flex" justify="space-between">
        <!--走马灯-->
        <el-col style="width: 440px">
          <Carousel></Carousel>
        </el-col>

        <el-col style="width: 700px">
          <div class="space-between">
            <HeadVideo></HeadVideo>
            <HeadVideo></HeadVideo>
            <HeadVideo></HeadVideo>
            <HeadVideo></HeadVideo>
          </div>

          <div class="space-between">
            <HeadVideo></HeadVideo>
            <HeadVideo></HeadVideo>
            <HeadVideo></HeadVideo>
            <HeadVideo></HeadVideo>
          </div>
        </el-col>
      </el-row>

      <!--推广-->
      <el-row type="flex" justify="space-between">
        <el-col style="width: 880px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <IconPaw></IconPaw>
            <span style="font-size: 24px">推广</span>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>
        </el-col>

        <el-col style="width: 260px">
          <!--在线人数-->
          <div class="grid-margin" style="height: 233px">
            <div style="height: 45px;line-height: 45px">
              <div style="font-size:12px;width: 130px;float: left;margin-left: 10px">
                在线人数：--
              </div>
              <div style="font-size:12px;float: left">
                最新投稿：--
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--广告-->
      <el-row>
        <el-col :span="24">
          <div class="grid-margin" style="height: 100px">
            <img src="../assets/image/1160x100.png" style="border-radius: 5px">
          </div>
        </el-col>
      </el-row>

      <!--直播-->
      <el-row type="flex" justify="space-between">
        <el-col style="width: 880px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <IconPaw></IconPaw>
            <span style="font-size: 24px">正在直播</span>
            <ActiveMore></ActiveMore>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>
        </el-col>

        <el-col style="width: 260px">
          <div class="grid-margin" style="height: 401px">
            <el-tabs v-model="activeName">
              <el-tab-pane label="直播排行" name="first" style="margin-top: 5px">
                <div v-for="item in 6" style="height: 56px">
                  <div v-if="item>=1&&item<=3">
                    <div class="icon-number-pink">{{item}}</div>
                    这是排行第{{item}}的稿件
                  </div>
                  <div v-else>
                    <div class="icon-number-grey">{{item}}</div>
                    这是排行第{{item}}的稿件
                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label="关注的主播" name="second" style="margin-top: 5px">
                <div style="text-align: center">
                  没有数据(-_-#)
                </div>
              </el-tab-pane>

              <el-tab-pane label="为你推荐" name="third" style="margin-top: 5px">
                <div style="margin-bottom: 20px">
                  <el-carousel interval="5000" arrow="never" height="248px">
                    <el-carousel-item v-for="item in 2">
                      <img src="../assets/image/260x248.png" class="img">
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="space-between">
                  <img src="../assets/image/photo_pic.png">
                  <img src="../assets/image/video_pic.png">
                </div>
              </el-tab-pane>
            </el-tabs>

          </div>
        </el-col>
      </el-row>
      <!--动画-->
      <el-row type="flex" justify="space-between">
        <el-col style="width: 880px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <IconPaw></IconPaw>
            <span style="font-size: 24px">动画</span>
            <ActiveMore></ActiveMore>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>
        </el-col>

        <el-col style="width: 260px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <span style="font-size: 18px">排行</span>
          </div>

          <el-row style="width: 260px">
            <div class="grid-margin" style="height: 336px">
              <div v-for="item in 7" style="height: 42px">
                <div v-if="item>=1&&item<=3">
                  <div class="icon-number-pink">{{item}}</div>
                  这是排行第{{item}}的稿件
                </div>
                <div v-else>
                  <div class="icon-number-grey">{{item}}</div>
                  这是排行第{{item}}的稿件
                </div>
              </div>
              <div style="text-align: center">
                <ButtonViewMore></ButtonViewMore>
              </div>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <!--番剧-->
      <el-row type="flex" justify="space-between">
        <el-col style="width: 880px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <IconPaw></IconPaw>
            <span style="font-size: 24px">番剧</span>
            <ActiveMore></ActiveMore>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>
        </el-col>
        <el-col style="width: 260px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <span style="font-size: 18px">排行</span>
          </div>
          <el-row style="width: 260px">
            <div class="grid-margin" style="height: 400px">
              <div v-for="item in 10" style="height: 36px">
                <div v-if="item>=1&&item<=3">
                  <div class="icon-number-pink">{{item}}</div>
                  这是排行第{{item}}的稿件
                </div>
                <div v-else>
                  <div class="icon-number-grey">{{item}}</div>
                  这是排行第{{item}}的稿件
                </div>
              </div>
              <div style="text-align: center">
                <ButtonViewMore></ButtonViewMore>
              </div>
            </div>
          </el-row>
        </el-col>

      </el-row>
      <!--番剧动态-->
      <el-row type="flex" justify="space-between">
        <el-col style="width: 880px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <span style="font-size: 18px">番剧动态</span>
            <ActiveMore></ActiveMore>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>

          <div class="space-between">
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
            <MainVideo></MainVideo>
          </div>
        </el-col>

        <el-col style="width: 260px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <span style="font-size: 18px">特别推荐</span>
          </div>

          <el-row style="width: 260px">
            <div class="grid-margin" style="height: 336px">
              <el-carousel class="grid-margin" interval="5000" arrow="never" height="268px">
                <el-carousel-item v-for="item in 2">
                  <img src="../assets/image/260x268.png">
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <!--国创-->
      <el-row type="flex" justify="space-between">
        <el-col style="width: 880px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <IconPaw></IconPaw>
            <span style="font-size: 24px">国创</span>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>

          <div class="space-between">
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
            <Anime></Anime>
          </div>
        </el-col>

        <el-col style="width: 260px">
          <div class="grid-margin" style="height: 45px;line-height: 45px">
            <span style="font-size: 18px">排行</span>
          </div>

          <el-row style="width: 260px">
            <div class="grid-margin" style="height: 295px">
              <div v-for="item in 5" style="height: 32px">
                <div v-if="item>=1&&item<=3">
                  <div class="icon-number-pink">{{item}}</div>
                  这是排行第{{item}}的稿件
                </div>
                <div v-else>
                  <div class="icon-number-grey">{{item}}</div>
                  这是排行第{{item}}的稿件
                </div>
              </div>
              <div>
                <ButtonViewMore></ButtonViewMore>
              </div>
              <div>
                <el-carousel class="grid-margin" interval="5000" arrow="never" height="90px">
                  <el-carousel-item v-for="item in 2">
                    <img src="../assets/image/260x90.png">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div>
      <LayoutBottom></LayoutBottom>
    </div>

  </div>
</template>

<script>
  import Carousel from './Layout/Carousel'
  import HeadVideo from './Layout/HeadVideo'
  import MainVideo from './Layout/MainVideo'
  import Anime from './Layout/Anime'
  import ButtonViewMore from './Layout/ButtonViewMore'
  import IconPaw from './Layout/IconPaw'
  import Menu from './Layout/Menu'
  import ActiveMore from './Layout/ActiveMore'
  import LayoutBottom from './Layout/LayoutBottom'

  export default {
    name: "Layout",
    components: {
      Carousel,
      HeadVideo,
      MainVideo,
      Anime,
      ButtonViewMore,
      IconPaw,
      Menu,
      ActiveMore,
      LayoutBottom,
    },
    data() {
      return {
        search: '',
        placeholder: 'bilibili',
        activeName: 'first',
      }
    },
    methods: {
      send() {
        if (this.search === '') {
          window.open('https://search.bilibili.com/all?keyword=' + this.placeholder);
        }
        else {
          window.open('https://search.bilibili.com/all?keyword=' + this.search);
        }
      }
    }
  }
</script>

<style>
  .el-tabs__item {
    font-size: 12px !important;
    height: 45px !important;
    line-height: 45px !important;
  }
</style>
