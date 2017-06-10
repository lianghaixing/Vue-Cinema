<template lang="html">
  <div class="login">
    <!-- 添加电影表单 -->
    <vodal :show="onLogin" animation="slideDown" :width="500" :height="480" :closeButton="false">
      <h2 align="center">登录</h2>
      <mu-text-field v-model="name" fullWidth label="账号" labelFloat/><br/>
      <mu-text-field type="password" v-model="password" fullWidth label="密码" labelFloat/><br/>
      <mu-raised-button @click="closeModal" label="取消" icon="undo"  />
      <mu-raised-button @click="addLogin" label="确定" icon="check" primary/>
    </vodal>
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.$route.name
  },
  components: {},
  data() {
    return {
      name: '',
      password: '',
      onLogin: true
    }
  },
  methods: {
    // 关闭modal的方法
    closeModal() {
      this.name = ''
      this.password = ''
    },
    // 访问后端添加电影的方法
    addLogin() {
      this.$router.push(`/List`)
      onLogin: false
    }
  }
}
</script>

<style lang="css">
.mu-th{
  text-align: center !important;
}
.mu-td{
  text-align: center !important;
}
</style>
