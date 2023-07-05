<template>
<div class="index">
    <div class="slide_box">
        <c-header></c-header>
        <div class="main">
          <div class="resume" >
            
            <div class="photo">
              <img class="head" v-bind:src="zhuan.consultant_photo">
            </div>
            <!-- <div class="name">{{consultant_name}}</div> -->
            <div class="title">{{zhuan.consultant_title}}</div>
            <div class="jieshao">{{zhuan.consultant_resume}}</div>

          </div>
          <div class="sure">
            <div class="time">
              <el-select v-model="value4"  clearable placeholder="请选择日期">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <div class="jieshu">
               <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="输入开始时间"
                  @select="handleSelect"
                ></el-autocomplete>
                <el-autocomplete
                  class="inline-input"
                  v-model="state2"
                  :fetch-suggestions="querySearch"
                  placeholder="输入结束时间"
                  @select="handleSelect"
                ></el-autocomplete>

             
              
            </div>
            <div class="ok"  @click="submitForm"><el-button type="primary">提交</el-button></div>
          </div>
        </div> 
             
    </div>
</div>


      <!-- <c-footer></c-footer> -->


</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
import axios from 'axios'
Vue.prototype.$axios=axios

export default {
  name: 'login',
  


  data() {
      
      return {
        zhuan:{},
          restaurants: [],
          state1: '',
          state2: '',
      
      options: [{
          value: '选项1',
          label: '周一'
        }, {
          value: '选项2',
          label: '周二'
        }, {
          value: '选项3',
          label: '周三'
        }, {
          value: '选项4',
          label: '周四'
        }, {
          value: '选项5',
          label: '周五'
        }],
        value4: ''
      }},
      mounted:function(){
          let host="http://0.0.0.0:8080";
          let id= localStorage.getItem('expertid');
          this.$axios.post(host+'/get/expert/info',{
            expertid:id
          }
            
          ).then(res=> {
                console.log(this);
                this.zhuan=res.data.data
        
          });
           this.restaurants = this.loadAll();
      },
       methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "第一节", "address": "" },
          { "value": "第二节", "address": "" },
          { "value": "请输入数字", "address": "" },
          { "value": "。。。。。", "address": "" },
          ]
      },
      handleSelect(item) {
        console.log(item);
      },
      submitForm(){
        let host="http://0.0.0.0:8080";
        this.$axios.post(host+'/get/expert/info',{
            expertid:id
          }
            
          ).then(res=> {
                console.log(this);
                this.zhuan=res.data.data
        
          });

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
  width:30%;
  position: absolute;
  color: #0092fe;
  margin:auto;
  left: 0rem;
  height: 30rem;
    top: 15rem;

}
.sure{
  width:70%;
  position: absolute;
  margin:auto;
  right: 0rem;
  height: 30rem;
  top: 10rem;

}
.time{
  width:100%;
  height:5rem;
  position: relative;

  
  /*transitioxn:all ease 800ms;*/
  /* height: 100%;
  overflow: hidden; */
}

.jieshu{
  width:100%;
  height:15rem;
  position: relative;
  margin: 150px 0 0 0;

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
