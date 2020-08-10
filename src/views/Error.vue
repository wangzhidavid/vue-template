<template>
  <div class="error_page">
    <div class="content_con">
      <img class="error_Img" :src="require('../assets/img/error.jpg')"  />
      <div class="text_con">
        <h4>{{ word }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error_content',
  data() {
    return {
      word: '您访问此页面出问题！！！'
    };
  }
};
</script>
<style lang="less" scoped>
  .content-con{
    width: 100VW;
  }
  .errorImg {
    width: 100VW;
    height: 225px;
  }
  
 

</style>