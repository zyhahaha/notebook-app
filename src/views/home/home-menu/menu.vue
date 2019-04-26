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
      isShowMenu: true
    };
  }
};
</script>

<style lang="less" scoped>
.menuWrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  &.showMenuWrap {
    z-index: 100;
  }
}

.menu-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(125, 125, 125, 0.5);
  display: none;
  z-index: -1;
  &.show {
    display: block;
  }
}
.menu {
  transform: translateX(-130%);
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  will-change: transform;

  width: 75%;
  height: 100%;
  background-color: #fff;
  &.showMenu {
    transform: translateX(0%);
  }
  .band_card {
    padding: 30px 0px;
    background-color: #303fa2;
    text-align: center;
    color: #fff;
    p {
      // display: inline-block;
    }
    .avatar_wrap {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      background-color: #fff;
    }
    .nickname {
      margin: 25rem 0rem 20rem;
      font-size: 22rem;
      font-weight: bold;
    }
    .summary {
      font-size: 22rem;
    }
  }
  // item_wrap
  .item_wrap {
    li {
      padding: 25rem 40rem;
      font-size: 28rem;
      border-bottom: 2rem solid #ccc;
      img {
        width: 48rem;
        margin-right: 48rem;
        vertical-align: middle;
      }
    }
  }
}
</style>

