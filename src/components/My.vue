<template>
<div class="index">
    <div class="slide_box">
        <c-header></c-header>
        <div class="main">
          <div class="resume">
            
            <div class="photo">
              <img class="head" v-bind:src="zhuanjia.consultant_photo">
            </div>
            <div class="name">{{zhuanjia.consultant_name}}</div>
            <div class="title">{{zhuanjia.consultant_title}}</div>
            <div class="jieshao">{{zhuanjia.consultant_resume}}</div>

          </div>
          <div class="sure">
            <div class="time">
              
            </div>
            <div class="ok">
              <el-button type="primary">提交</el-button>
            </div>
          </div>
        </div> 
             
    </div>
</div>


      <!-- <c-footer></c-footer> -->


</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
import axios from 'axios';

export default {
  name: 'login',
  mounted:function(){
    let host="http://0.0.0.0:8080";
    let id= localStorage.getItem('expertid');
    axios.post(host+'/get/expert/info',{
      expertid:id
    }
      
    ).then(function (response) {
        if (200===response.data.code) {
          // this.$router.push('admin');
          Vue.experts=response.data.data;
          console.log(Vue.items);
          // console.log(Vue+"data");
          
        }
    });
    },


  data() {
      
      return {
        zhuanjia: Vue.experts,
        
      }
    }
   
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
  width:100%;
  position: absolute;
  height:50rem;


}
.resume{
  width:50%;
  position: absolute;
  color: red;
  margin:auto;
  left: 0rem;
  height: 30rem;
    top: 15rem;

}
.sure{
  width:50%;
  position: absolute;
  margin:10px,10px,10px,10px;
  right: 0rem;
  height: 30rem;

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
  height:40rem;
  box-sizing:border-box;
  padding: 10px,0,20px,0;
}
.case h4{
  font-size:40px;
  font-family: PingFangSC-Thin,"PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
  color:#222222;
  padding-top:2rem;
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

</style>
