<template>
  <div class="add-page">
    <add-header @save="save" />
    <textarea name="" placeholder="test" v-model="content"></textarea>
  </div>
</template>

<script>
import axios from 'axios';
import addHeader from './header/header.vue'
export default {
  name: "add",
  components: {
    addHeader
  },
  data: () => {
    return {
      isShowMenu: false
    }
  },
  methods: {
    save(){
      axios.post('/api/note/add', {content: this.content}).then(res => {
        console.log(res.data);
        // this.noteList = res.data;
      })
    }
  }
};
</script>

<style lang="less" scoped>
.add-page {
  height: 100%;
  padding-top: 0.65rem;
  textarea{
    width: 100%;
    height: 100%;
  }
}
</style>

