
<template>
 <!-- <div class="home" v-html="HTMLContent">
//   </div> -->
  <div>
    <!-- <div class="home_title">HTML</div> -->
    <div ref="testTemplate" id="testTemplate">
    </div>
  </div>
</template>
<script>
import * as temp from "../utils/insertTemplate";
import {mapState} from 'vuex';
import homeAPI from "../services/homeAPI";
export default {
  name: 'About',
  data(){
    return {
      paramsRes: {},
      billItem:{
        "swiperImg": [
          { "imgTitle": "img1","urlPath": "http://image.biaobaiju.com/uploads/20180830/22/1535637792-zUBEtYhOae.jpg", "urlLink": "alibaba"},
          { "imgTitle": "img2","urlPath": "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg", "urlLink": "huawei"}
        ],
        "hotNews": ["东华","东华云计算", "文旅项目"],
        "hotNewsList": [{
          "titleName": "洪灾",
          "content": "南方水灾"
        },
        {
          "titleName": "疫情",
          "content": "全球疫情"
        } 
        ],
        "importThing": [{
          "titleName": "南方洪灾",
          "content": "南方水灾"
        },
        {
          "titleName": "全球疫情",
          "content": "全球疫情"
        } 
        ]
      },
      billHtml:'<div class="org">{{billItem.name}}</div>',
    }
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
  created(){
     this.getData();
  },
  methods:{
    async getData() {
      const self_this = this;
      this.paramsRes = await homeAPI.getHomePageInfoHtml();
      console.log("paramsRes", this.paramsRes );
      // console.log("datalist", response.data, paramsRes);
      // if(){
        this.$store.dispatch("aboutPage/ACTION_ABOUT_DATA_STATE", {
            aboutData: self_this.paramsRes
        });

      // }
      
      let option = {
        "billHtml": `<div>${this.paramsRes.swiperImg}${this.paramsRes.hotNews}</div>`,          // `${paramsName}`,      // this.billHtml,
        "billItem": this.billItem,    // `${paramsName}`,      
      }
      temp.doComponents(option); // 加载模板

    },
  }


}
</script>

<style lang="less" scoped>
  .swiperImg {
    width: 100VW;
    height: 225px;
  }
  .hotNews {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
  }
  .hotNewsList, .importThingList {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    // @include center();
  }
  .importThingList {
    flex: 1;
    padding: 20px;
    text-align: left;
  }

</style>