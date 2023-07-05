<template>
  <div class="case">
              <h4>主流专家这样评价</h4>
              <ul class="clearfix">
                  <li class="" v-for="item in items">
                      <div class="case_bar black">
                      </div>
                      <div class="case_con">
                          <div class="tai name">
                          </div>
                          <p class="text">{{item.name}}
                          </p>
                          <div class="detail_btn">
                            <a href="http://www.tmtpost.com/2588460.html" target="_blank">查看详情</a>
                          </div>
                      </div>
                  </li>
                 
                  
              </ul>
          </div>
</template>

<script>
export default {
  name: 'login',
   data() {
      const item = {
        
        name: ' 突破抑郁，走向光明 一例抑郁症患者恢复期的咨询',
       
      };
      return {
        items: Array(5).fill(item)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.case{
  width:100%;
  background:#F4F7FD;
  height:39rem;
  box-sizing:border-box;
  padding: 10px,0,20px,0;
  top: 80rem;
  position: absolute;
}
.case h4{
  font-size:40px;
  font-family: PingFangSC-Thin,"PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
  color:#222222;
  padding-top:3rem;
  padding-bottom:3.6rem;
  font-weight:normal;
  text-align: center;
}
.case ul{
  width:100%;
  margin:0 auto;
}
.case li{
  float:left;
  width:220px;
  position: relative;
  left:0;
  top:0;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  color:#5C5C5C;
  font-family: PingFangSC-Regular,"PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
  height:300px;
  margin-right:20px;
  transition:all ease 300ms;
}
.case li:last-child{
  margin-right:0;
}
.case li .case_con{
  padding-top:62px;
  position: relative;
  left:0;
  top:0;
  height:100%;
  z-index: 1;
  box-sizing: border-box;
}
.case li a{
  text-decoration: none;
  color:#5C5C5C;
}





.case li.on{
  box-shadow:0 0 10px 1px rgba(0, 0, 0, .3);
  top:-10px;
  color:white;
}
.case li .text{
  font-size:14px;
  color:#5C5C5C;
  line-height:20px;
  padding-top:50px;
  text-align: center;
  width:210px;
  margin: 0 auto;
}
.case li.on .text{
  color:white;
}
.case li.on .detail_btn{
  transition:all ease 200ms;
  opacity: 1;
}
.case li .name{
  width:160px;
  height:46px;
  margin:0 auto;
}
.case li.on a{
  color:white;
}
.case li .detail_btn{
  text-align: center;
  font-size:14px;
  position: absolute;
  left:0;
  bottom: 14px;
  width:100%;
  opacity: 0;
}
.case_bar {
  width:100%;
  position: absolute;
  left:0;
  top:0;
  height:10px;
  transition:all ease 300ms;
}
.black{
  background:#231916;
}
.red{
  background:#FF3A00;
}
.blue_light{
  background:#009FED;
}
.blue{
  background:#3E7DE7;
}
.blue_dark{
  background: #3E88CA;
}

.case li.on .case_bar{
  height:100%;
}

</style>
