<template>
    <div class="footer_info">
              <div class="footer_links">
                  <p>友情链接</p>
                      <span><a href="#" target="_blank">525心理网</a></span>
                      <span><a href="#" target="_blank">壹心理</a></span>
                      <span><a href="#" target="_blank">简单心理</a></span>
                      <span><a href="#" target="_blank">心友网在线</a></span>
                      <span><a href="#" target="_blank">中国心理咨询网</a></span>
                      <span><a href="#" target="_blank">数据分析</a></span>
                      <br>
                      <br>
                      <a href="#" target="_blank">京ICP备15021703号-3</a>
              </div>
    </div>
</template>

<script>
export default {
  name: 'footer_info',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer_info{
    padding-top:3rem;
    border-top:1px solid RGBA(216, 216, 216, 0.9);
     position: absolute; 
    width:100%;
    text-align:center;
    top:120rem;
    /*bottom:100px; */
    color:#888888;
  }
  a {
  color: #333;
  text-decoration: none;
}
</style>
