<template>
  <div class="index">
    <div class="slide_box">

          <!-- 首屏 -->
          <!-- <div class="container "> -->
            <!-- <div class="top section" > -->
            <c-header></c-header>
                
            <!-- </div>                               -->
          <!-- </div> -->
           <div class="case">
              <h4>选择你喜欢的专家</h4>

              <div class="scelect">
                    <div class="shuru">

                        <el-input v-model="input" placeholder="请输入专家名字"></el-input>
                    </div>
                      <el-radio v-model="radio" label="1">男</el-radio>
                      <el-radio v-model="radio" label="2">女</el-radio>
              
              </div>

              <ul class="clearfix">
                  <li class="" v-for="item in zhuanjia">
                      <div class="case_bar black">
                      </div>
                      <div class="case_con">
                          <div class="tai name">
                            {{item.consultant_name}}
                          </div>
                          <p class="text">
                              {{item.consultant_title}}
                          </p>
                          <div class="detail_btn">
                            <a v-on:click.once="start(item.id)" >开始预约</a>
                          </div>
                      </div>
                  </li>
                 
                  
              </ul>
          </div>


          <!-- <c-footer></c-footer> -->

    </div>
</div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
import axios from 'axios';

export default {
  name: 'login',
  mounted:function(){
    let host="http://0.0.0.0:8080";
    axios.post(host+'/get/expert/info'
      
    ).then(function (response) {
        if (200===response.data.code) {
          // this.$router.push('admin');
          Vue.expert=response.data.data;
          console.log(Vue.items);
          // console.log(Vue+"data");
          
        }
    });
  },

  data() {
      
      return {
        zhuanjia: Vue.expert,
        radio: '1',
        input:''
      }
  },
  methods: {
    start(id){
      localStorage.setItem('expertid',id);
       
      var width=localStorage.getItem('expertid');
      console.log(width);

      this.$router.push('expert');
    }
  }
   
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scelect{
  width:100%;
  position: relative;
  height:3rem;


}
.scelect .shuru{
  width:20rem;
  position: absolute;
  margin:10px,10px,10px,10px;
  left: 10rem;
}
.time{
  width:5rem;
  position: absolute;
  margin:10px,10px,10px,10px;
  right: 5rem;

}
.index{
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  /*transitioxn:all ease 800ms;*/
  /* height: 100%;
  overflow: hidden; */
}

.slide_box{
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  /*transitioxn:all ease 800ms;*/
  /* height: 100%;
  overflow: hidden; */
}
.container{
  width:100%;
  height:40px;
  /* position: relative;
  left:0;
  top:0; */
}
.container .top{
  width:100%;
  height:34.1rem;
}
.case{
  width:100%;
  background:#F4F7FD;
  height:100%;
  box-sizing:border-box;
  padding: 10px,0,20px,0;
  top: 5rem;
  position: absolute;
}
.case h4{
  font-size:30px;
  font-family: PingFangSC-Thin,"PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
  color:#222222;
  padding-top:0rem;
  /*padding-bottom:3.6rem;*/
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
  color:#0092fe;
}
.case li .detail_btn{
  text-align: center;
  font-size:14px;
  position: absolute;
  left:0;
  bottom: 14px;
  width:100%;
  opacity: 1;
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
.clearfix::before,  
.clearfix::after{  
        display:table;  
        content:"";  
}  
.clearfix::after{  
    clear:both;  
}  


</style>
