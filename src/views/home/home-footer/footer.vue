<template>
  <div class="footer">
    <ul>
      <li>
        <img src="~@/assets/images/note-pre.png" alt>
        <br>
        <p>笔记</p>
      </li>
      <li>
        <img src="~@/assets/images/note-pre.png" alt>
        <br>
        <p>笔记</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "homeFooter",
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

