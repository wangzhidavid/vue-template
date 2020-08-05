<template>
  <div class="home">
    <!-- <router-view></router-view> -->
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
// import homeAPI from "../services/homeAPI";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
      // this.getData();
  },
  methods: {
      // getData() {
      //   homeAPI.getHomePage().then(res => {
      //   if (res.data.data) {
      //       console.log("this", res.data.data);
      //     }
      //   }).catch(err => {
      //     console.log(err);
      //   });
      // }
    // getData() {
    //     axios.get('../../static/data.json').then(response => {
    //         console.log(response.data);
    //     }, response => {
    //         console.log("error");
    //     });
    // }
  }
}
</script>
