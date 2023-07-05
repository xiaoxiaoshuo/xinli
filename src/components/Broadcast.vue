<template>
  <div class="swiper-container expoter">
    <div class="swiper-wrapper">

        <div class="swiper-slide"  v-for="item in items">
        	<img class="head_icon" v-bind:src="item.consultant_photo">
        	  <p class="name">{{item.consultant_name}}</p>
            <p class="title">{{item.consultant_title}}</p>
            <p class="text">{{item.consultant_resume}}</p>
        </div>
    </div>
    
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    
</div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
import axios from 'axios'
export default {
  	name: 'login',
    data(){
      
      return {
        items:Vue.itemdd
      }
    },
    created:function(){

       

    },  
	  mounted:function(){
    	var mySwiper = new Swiper('.swiper-container', {
      		autoplay: true,
      		speed:300,
      		navigation:{
        	prevEI:'.swiper-button-prev',
        	nextEI:'.swiper-button-next',
      		},
    		// inintiaI
      		pagination: {
          		el: '.swiper-pagination',
        	},
   	      });
          // setTimeout(this.,"30000");
          // Vue.itemd=Vue.itemss;
          let host="http://0.0.0.0:8080";
            axios.post(host+'/get/expert/info'
              
            ).then(function (response) {
                if (200===response.data.code) {
                  // this.$router.push('admin');
                  Vue.itemdd=response.data.data;
                  // console.log(this.itemdd);
                  // console.log(Vue+"data");
                  
                }
            });
        
           
          
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
.expoter{
  padding-top:5rem;
  text-align: center;
  background:#F4F7FD;
  height:37rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 3rem;
}

.expoter .swiper-pagination{
  bottom:10rem;
}


.expoter .head_icon{
  display: block;
  width: 5rem;
  height:5rem;
  margin:0 auto;
}
.expoter p.name{
  font-size:20px;
  font-family: PingFangSC-Medium,"PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
  color:#888888;
  padding-top:1rem;
  padding-bottom:0.5rem;
}
.expoter p.title{
  font-size:18px;
  font-family: PingFangSC-Regular,"PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
  color:#888888;
  padding-bottom:2rem;
}
.expoter p.text{
  width:100%;
  margin:0 auto;
  font-size:28px;
  line-height:60px;
  font-family: PingFangSC-Thin;
  color:#222222;
  /* padding-bottom:120px; */
}

</style>
