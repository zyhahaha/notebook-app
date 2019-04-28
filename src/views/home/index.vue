<template>
  <div class="home">
    <home-header />
    <home-content />
    <div class="add-note">
      <img src="~@/assets/images/add.png" alt="">
    </div>
    <home-footer />
    <home-menu />
  </div>
</template>

<script>
import homeHeader from './home-header/header.vue';
import homeFooter from './home-footer/footer.vue';
import homeMenu from './home-menu/menu.vue';
import homeContent from './home-content/content.vue';
export default {
  name: "home",
  components: {
    homeHeader,
    homeFooter,
    homeMenu,
    homeContent
  },
  data: () => {
    return {
      isShowMenu: false
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
// -------------- add-note
.add-note {
  width: 0.5rem;
  height: 0.5rem;
  position: fixed;
  bottom: 0.8rem;
  right: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.add-note img{
  width: 0.25rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

</style>

