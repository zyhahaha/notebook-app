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
  data(){
    return {
      id: this.$route.params.id,
      content: ''
    }
  },
  mounted(){
    this.content = this.$store.state.noteContent;
    // alert(this.id)
    // alert(this.$route.params.id)
  },
  methods: {
    save(){
      if (!this.id) {
        axios.post('/api/note/add', {content: this.content}).then(res => {
          console.log(res.data);
          alert('添加成功');
          this.$router.replace('/');
        })
      } else {
        axios.post('/api/note/modify', {content: this.content, id: this.id}).then(res => {
          console.log(res.data);
          alert('添加成功');
          this.$router.replace('/');
        })
      }
      
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

