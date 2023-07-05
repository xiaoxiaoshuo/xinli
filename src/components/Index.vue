<template>
  <div class="index">
    <!-- <div class="pagination">
        <ul>
          <li class=""></li>
          <li class=""></li>
          <li class=""></li>
        </ul>
    </div> -->
    <div class="slide_box">

          <!-- 首屏 -->
          <div class="container ">
            <div class="top section" >
                <c-header></c-header>
                <!--首屏顶栏 -->
                <!-- 首屏 中间-->
                <div class="video">
                    <h3>中国劳动关系学院心理咨询平台</h3>
                    <div id="play" class="play" v-on:click.once="order()"></div>
                    <div class="login_text" v-on:click="order()">
                      <!-- <a v-on:click.once="order()">开始预约</a> -->
                      开始预约
                    </div>
                    <div class="wave_box">
                        <img class="wave_1" src="../assets/png/wave_1.png">
                        <img class="wave_2" src="../assets/png/wave_2.png">
                        <img class="wave_3" src="../assets/png/wave_3.png">
                    </div>
                </div>
            </div>
          </div>
         
          <c-lunbo></c-lunbo>
          <c-case></c-case>
          <c-footer></c-footer>

    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Swiper from 'swiper'

// console.log(mySwiper)
export default {
  name: 'slide_box',
  mounted:function(){
    var mySwiper = new Swiper('.swiper-container', {
    // width:10000,
        autoplay: true,

        speed:300,
        navigation:{
          prevEI:'.swiper-button-prev',
          newextEI:'.swiper-button-next',
        } ,
  // inintiaI
      pagination:{
        el:'.swiper-pagination',
      }
    });
          let host="http://0.0.0.0:8080";
            var data=axios.post(host+'/get/expert/info'
              
            ).then(function (response) {
                if (200===response.data.code) {
                  // this.$router.push('admin');
                  Vue.items=response.data.data;
                  
                  // console.log(Vue+"data");
                  
                }
            });
            // console.log(data.items);

  
  },
  

  data () {
    return { 
      items:Vue.itemdd

    }
  },
  methods: {
    order(){
      this.$router.push('order');

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
.pagination{
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translate(0,-50%);
  z-index: 1010;
}

a{
  color: #333;
  text-decoration: none;
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
  height:100%;
  /* position: relative;
  left:0;
  top:0; */
}
.container .top{
  width:100%;
  height:34.1rem;
}
.container .top .video{
  position: relative;
  left:0;
  top:0;
  /*height:29.65rem;*/
  height: 100%;
  /* background:url('../img/wave.png') left bottom no-repeat;
  background-size:100% 144px; */
  text-align:center;
}
.container .top .wave_box{
  width: 100%;
  overflow: hidden;
  position: absolute;
  left:0;
  bottom:0;
  height:9rem;
}
.container .top .wave_box img{
  width:140%;
  position: absolute;
  left:-20%;
  bottom:0;
  /* height:144px; */
}
.container .top .wave_box .wave_1{
  z-index: 10;
  animation-name: wave_to_right;;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: infinite;
  animation-direction:alternate;
  height:4.6rem;
  /* Firefox: */
  -moz-animation-name: wave_to_right;
  -moz-animation-duration: 12s;
  -moz-animation-timing-function: linear;
  -moz-animation-delay: 0;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction:alternate;
  /* Safari Chrome: */
  -webkit-animation-name: wave_to_right;
  -webkit-animation-duration: 12s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction:alternate;
}
.container .top .wave_box .wave_2{
  z-index: 9;
  height:4.6rem;
  animation-name: wave_to_right;;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: infinite;
  animation-direction:alternate;
  /* Firefox: */
  -moz-animation-name: wave_to_right;
  -moz-animation-duration: 6s;
  -moz-animation-timing-function: linear;
  -moz-animation-delay: 0;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction:alternate;
  /* Safari Chrome: */
  -webkit-animation-name: wave_to_right;
  -webkit-animation-duration: 6s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction:alternate;
}
.container .top .wave_box .wave_3{
  z-index: 8;
  bottom:-20px;
  height:6.15rem;
  animation-name: wave_to_left;;
  animation-duration: 24s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: infinite;
  animation-direction:alternate;
  /* Firefox: */
  -moz-animation-name: wave_to_left;
  -moz-animation-duration: 24s;
  -moz-animation-timing-function: linear;
  -moz-animation-delay: 0;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction:alternate;
  /* Safari å’Œ Chrome: */
  -webkit-animation-name: wave_to_left;
  -webkit-animation-duration: 24s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction:alternate;
}
.container .top .video h3{
  padding-top:9.9rem;
  font-size: 48px;
  font-weight: 100;
  font-family: PingFangSC-Thin,"PingFang SC", -apple-system, Roboto, "Microsoft YaHei";
  letter-spacing: 3px;
}
.container .top .video .play {
  width: 80px;
  height: 54px;
  background: url('../assets/png/play.png') 0 0/100% no-repeat;
  margin: 3.65rem auto;
  cursor: pointer;
}
.section{
  box-sizing:border-box;
}
.login_text {
  font-size: 20px;
  color:#0092fe;
}


.pagination ul li{
  width:8px;
  height:8px;
  background:#c1e7fe;
  margin-top:8px;
  border-radius: 50%;
  transition:all ease 200ms;
  cursor:pointer;
}
.pagination ul li.on{
  height:30px;
  border-radius: 5px;
}
</style>