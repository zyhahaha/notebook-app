<template>
  <div class="header">
    <!-- <img class="menu" src="~@/assets/images/menu.png" alt> -->
    <!-- <p>test</p> -->
    <!-- <img class="info" src="~@/assets/images/info.png" alt> -->
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  components: {},
  data: () => {
    return {
      isShowMenu: false
    };
  }
};
</script>

<style lang="less" scoped>
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
  height: 0.2rem;
  vertical-align: middle;
  // line-height: 0.6rem;
}
.header p {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.24rem;
}
// .header .info {
//   float: right;
//   // height: 0.2rem;
//   width: 0.2rem;
//   padding-top: 0.1rem;
//   vertical-align: middle;
// }
</style>

