<template>
  <!--首屏顶栏 -->
    <header id="header" class="default">
        <!-- logo -->
        <div class="logo">
            <a href="javascript:void(0)"><img src="http://202.204.19.74/images/logo.png" alt="logo"></a>
        </div>
        <!-- 顶部链接导航 -->
        <nav>
            <li><a href="javascript:void(0)" id="feature" v-on:click.once="order()">在线预约</a></li>
            <li><a href="javascript:void(0)" id="comment">在线咨询</a></li>
            <li><a href="#">案例展示</a></li>
            <li class="on register"  v-on:click.once="login()" ><a href="javascript:void(0)">{{loginbution}}</a></li>
        </nav>
    </header>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'



// const store = new Vuex.Store({
//   state: {
//     loginbution:登陆
//   },
//   mutations: {
//     increment: state => state.count++,
//     decrement: state => state.count--
//   }
// })

export default {
  name: 'login',

  data () {
    return {
      loginbution:"登陆"
    }
    }, 
    
    methods:{
        
        login(){
          this.$router.push('login');
        },
        order(){
          this.$router.push('order');
        }

    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
  line-height:1
}
li {
  list-style: none;
}

a{
  color: #333;
  text-decoration: none;
}
.clearfix:after{
  clear: both;
  content:'';
  display:block;
}
html,
body {
  position: relative;
  height: 100%;
  min-height: 768px;
  font-size: 18px;
  min-width: 1024px;
  overflow: hidden;
  /* user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none; */
  height:100%;
}
body {
  font-family: PingFangSC-Thin,"PingFang SC", -apple-system, Roboto, "Microsoft YaHei";
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
  -webkit-font-smoothing: antialiased;
  height: 100%;
  overflow: hidden;
}

header {
  min-width:1024px;
  width: 100%;
  padding: 15px 38px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1001;
  /* background: white */
}
header.default{
  position: absolute;
  left:0;
  top:12px;
}
header.follow{
  position: fixed;
  left:0;
  top:-75px;
  box-shadow:0 1px 10px 1px rgba(0, 0, 0, .3);
}
header.show{
  position: fixed;
  left:0;
  top:0;
  transition:all ease 300ms;
  box-shadow:0 1px 10px 1px rgba(0, 0, 0, .3);
  z-index: 1111;
}
header.hide{
  position: fixed;
  left:0;
  top:-95px;
  transition:all ease 300ms;
}
header .logo {
  float: left;
  width:150px;
  height: 40px;
  background:#0092fe;
  border-radius: 8px;


}
header .logo img{
  width:100%;
}
header nav {
  float: right;
  font-size:16px;
}
.video .login_text{
  position:relative;
  left:0;
  top:-20px;
  z-index: 11;
}
header nav li {
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius:4px;
}
header nav li a{
  display: block;
  width:100%;
  height:40px;
  line-height: 40px;
}
header nav li.on{
  background:#0092fe;
}
header nav li.on a{
  color:white;
}

</style>
