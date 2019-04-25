<template>
  <div class="home">
    <!-- <div class="header">
      <img class="menu" src="~@/assets/images/menu.png" alt="">
      <p>test</p>
    </div>
    <div class="content">
      <p class="search">搜索</p>
      <ul>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
        <li>
          <p>大订单</p>
          <span>刚刚</span>
        </li>
      </ul>
    </div>-->
    <div class="footer">
      <ul>
        <li>
          <img src="~@/assets/images/note-pre.png" alt>
          <br />
          <p>笔记</p>
        </li>
        <li>
          <img src="~@/assets/images/note-pre.png" alt>
          <br />
          <p>笔记</p>
        </li>
      </ul>
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
.home {
  height: 100%;
}

// ------------ header
.header {
  width: 100%;
  height: 0.6rem;
  padding: 0 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 0.6rem;
  background-color: #ccc;
}
.header .menu {
  width: 0.3rem;
  vertical-align: middle;
  // line-height: 0.6rem;
}
.header p {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.24rem;
}

// ---------- content
.content {
  min-height: 100%;
  padding: 0.8rem 0.2rem;
  background-color: #f8f8f8;
}
.content .search {
  height: 0.4rem;
  margin-bottom: 0.3rem;
  line-height: 0.4rem;
  border-radius: 0.05rem;
  text-align: center;
  color: #ccc;
  background-color: #fff;
}
.content ul {
  background-color: #f8f8f8;
}
.content ul li {
  height: 1rem;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
}
.content ul li p {
  margin-bottom: 0.05rem;
  font-size: 0.24rem;
}
.content ul li span {
  font-size: 0.14rem;
}

// ------------ footer
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.6rem;
  width: 100%;
  background-color: #ccc;
}
.footer ul{
  display: flex;
}
.footer li{
  flex: 1;
  height: 100%;
  padding-top: 0.1rem;
  // line-height: 0.6rem;
  text-align: center;
}
.footer li img{
  width: 0.2rem;
}
.footer li p{
  display: inline-block;
  font-size: 0.12rem;
}
</style>

