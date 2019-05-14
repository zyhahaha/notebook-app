<template>
  <div class="header">
    <img class="back" src="~@/assets/images/back.png" alt>
    <p @click="save"></p>
    <img class="save" src="~@/assets/images/save.png" alt>
  </div>
</template>

<script>
export default {
  name: "addHeader",
  components: {},
  data: () => {
    return {
      isShowMenu: false
    };
  },
  methods: {
    save(){
      this.$emit('save');
    }
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
.header .back {
  height: 0.2rem;
  vertical-align: middle;
  // line-height: 0.6rem;
}
.header p {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.24rem;
}
.header .save {
  float: right;
  height: 0.2rem;
  margin-top: 0.2rem;
  vertical-align: middle;
}
</style>

