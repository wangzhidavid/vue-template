import http from './axios';

class HomeAPI {
  // 首页活动信息
  static getHomePage(paramsData) {
    return http.get(paramsData);
  }
  static getHomePageInfoHtml(){
    return http.get("./homePageInfoHtml.json")
  }  
}
export default HomeAPI;