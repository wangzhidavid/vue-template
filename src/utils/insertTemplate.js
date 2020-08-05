import Vue from 'vue'//引入vue
export function doComponents(opt){
 //opt 调用时传入 可以包含template的html语句,data中需要绑定的数据等
 let billItem = opt.billItem
 let billHtml =opt.billHtml;
 console.log("billItem",billItem);
 const myComponent = Vue.extend({
  template: billHtml,
  data() {
    return {
      billItem:billItem
    }
  },
  methods: {// 子模板中自定义事件
  }
 })
 // $mount(id)通过查找页面id手动挂载到页面
 new myComponent().$mount("#testTemplate")
}