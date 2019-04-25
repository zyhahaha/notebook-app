<template>
  <div class="home">
    <div class="header">
      <p></p>
    </div>
    <div class="content">
      <p class="search">搜索</p>
      <ul>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="less" scoped>
.home{
  height: 100%;
}
.header {
  width: 100%;
  height: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ccc;
}

.content{
  height: 100%;
  padding: 0.2rem;
  padding-top: 0.8rem;
  background-color: #f8f8f8;
}
.content .search{
  height: 0.4rem;
  margin-bottom: 0.3rem;
  line-height: 0.4rem;
  border-radius: 0.05rem;
  text-align: center;
  color: #ccc;
  background-color: #fff;
}
.content ul li{
  height: 1rem;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
}
.content ul li p{
  margin-bottom: 0.05rem;
  font-size: 0.24rem;
}
.content ul li span{
  font-size: 0.14rem;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.6rem;
  width: 100%;
  background-color: #ccc;
}
</style>

