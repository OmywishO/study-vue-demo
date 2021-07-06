<template>
  <div style="font-size:16px;">
    <i class="el-icon-message-solid custom-message" />
    <span>
      当前 <router-link style="color:red;" to="/">0</router-link> 条未读消息
    </span>
  </div>
</template>

<script>

export default {
  name: 'Messages',
  data() {
    return {
    }
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>

<style scoped>
.custom-message{
  color: #597ef7;
  font-size: 24px;
}
</style>
