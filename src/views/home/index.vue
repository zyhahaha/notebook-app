<template>
  <div class="home">
    <!-- <home-header /> -->
    <home-content />
    <div class="add-note" @click="$router.push('add')">
      <img src="~@/assets/images/add.png" alt="">
    </div>
    <home-footer @changeMenuStateOpen="isShowMenu = true;" />
    <home-menu :isShowMenu="isShowMenu" @changeMenuStateClose="isShowMenu = false" />
  </div>
</template>

<script>
import homeFooter from './modules/footer.vue';
import homeMenu from './modules/menu.vue';
import homeContent from './modules/content.vue';
export default {
  name: "home",
  components: {
    homeFooter,
    homeMenu,
    homeContent
  },
  data: () => {
    return {
      isShowMenu: false
    }
  },
  mathods: {
    changeMenuStateOpen(){

    },
    changeMenuStateClose(){
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

