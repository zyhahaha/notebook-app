<template>
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
  </div>
</template>

<script>
export default {
  name: "homeContent",
  components: {},
  data: () => {
    return {
      isShowMenu: false
    };
  }
};
</script>

<style lang="less" scoped>
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
</style>

