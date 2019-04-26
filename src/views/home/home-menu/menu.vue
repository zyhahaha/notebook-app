<template>
  <div class="menuWrap" :class="{'showMenuWrap': isShowMenu}">
    <div class="menu" :class="{'showMenu': isShowMenu}">
      <div class="band_card">
        <a to="/avatar">
          <p class="avatar_wrap">
            <img src alt>
          </p>
        </a>
        <p class="nickname">xx</p>
        <p class="summary">xxx</p>
      </div>
      <div class="item_wrap">
        <ul>
          <li>
            <img src="{noticeImg}" alt>
            <span>我的消息</span>
          </li>
          <li>
            <img src="{collectImg}" alt>
            <span>我的收藏</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      onClick="{this.props.changeMenuStateClose}"
      class="menu-drawer-overlay"
      :class="{'show': isShowMenu}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "homeMenu",
  components: {},
  data: () => {
    return {
      isShowMenu: false
    };
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.6rem;
  width: 100%;
  background-color: #ccc;
}
.footer ul {
  display: flex;
}
.footer li {
  flex: 1;
  height: 100%;
  padding-top: 0.1rem;
  text-align: center;
}
.footer li img {
  width: 0.25rem;
  margin-bottom: -0.03rem;
}
.footer li p {
  display: inline-block;
  font-size: 0.12rem;
}
</style>

