<template>
  <div class="home">
    <div class="swiperImg_box" v-if="homePageData.swiperImg&&homePageData.swiperImg.length > 0">
      <img  class="swiperImg" v-for="(item,index) in homePageData.swiperImg" :key=index :src="item.urlPath" alt=""  v-show="index===activeIndex" >
    </div>
    <div class="hotNews" v-if="homePageData.hotNews&&homePageData.hotNews.length > 0">
      <h3 v-for="(item,index) in homePageData.hotNews" :key=index  class="newsTitle"> 
        {{item}}
      </h3>
    </div>
    <div  class="hotNewsList" v-if="homePageData.hotNewsList && homePageData.hotNewsList.length > 0">
      <div class="newsList"  v-for="(itemCell,index) in homePageData.hotNewsList" :key=index @click="linkTo('About', index)">
        <h3 class="newsTitle"> 
          {{itemCell.titleName}}
        </h3>
        <div class="newsContent">
          {{itemCell.content}}
        </div>
      </div>
    </div>
    <div  class="importThingList" v-if="homePageData.importThing && homePageData.importThing.length > 0">
      <div class="importThing"  v-for="(itemCell,index) in homePageData.importThing" :key=index >
        <h3 class="newsTitle"> 
          {{itemCell.titleName}}
        </h3>
        <div class="newsContent">
          {{itemCell.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeAPI from "../services/homeAPI";
import {mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      activeIndex: 0,
      timer: null,
      homePageData: {
        swiperImg: [],
        hotNews: [],
        hotNewsList: [{
        }]
      }
    }
  }, 
  created(){
     this.getData();
  },
  mounted() {
      this.run();
      console.log("test", this.homePageData, this.homePageData.hotNews, this.homePageData.hotNewsList);
  },
  computed: {
    ...mapState({
      aboutData: state => state.aboutPage.aboutData,
    }),
  },
  watch: {
    aboutData: function (newVal, preVal) {
      console.log('aboutData改变前后的值：',preVal ,newVal)
    },
  },
  methods: {
    async getData() {
      const self_this = this;
      let homePageDataResponse = await homeAPI.getHomePage("./homePageInfo.json");
      console.log("homePageDataResponse", homePageDataResponse, self_this.aboutData);
      self_this.homePageData = homePageDataResponse;
    },
    run(){
      this.timer = setInterval(() =>{
         //让下标每秒加一实现切换效果
        this.activeIndex += 1;
        //如果走到最后一张，让下标回到0
        if(this.activeIndex === this.homePageData.swiperImg.length){
          this.activeIndex = 0
        }}, 1000);
    },
    linkTo(pageName, params){
      console.log("page", pageName, params);
      this.$router.push({
        name: pageName,
        path: `/${pageName}`,
        // query: {
        //   paramsId: params
        // }
      })
    },
    destroyed(){
      this.timer = null;
    },
  }
}
</script>  
<style lang="less" scoped>
  // @import '../assets/css/index.less';  //需要再次引入？？？  简化步骤
  .swiperImg {
    width: 100VW;
    height: 225px;
  }
  .hotNews {
    .flexbox(space-around, center, row, nowrap);
    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    // align-content: center;
    background-color: @background_color;
    .newsTitle {
      padding: 10px 0;
    }
  }
  .hotNewsList, .importThingList {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
  }
  .importThingList {
    flex: 1;
    padding: 20px;
    text-align: left;
  }

</style>