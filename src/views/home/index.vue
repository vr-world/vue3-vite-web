<template>
  <h1>{{ data.title }}</h1>
  <TestComponent></TestComponent>
  <div class="route">
    路由跳转
    <a @click="toAbout">跳转到关于我们</a>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import TestComponent from '@/components/testComponent.vue';
import { TestApi } from '@/apis';
import router from '@/router';
const data = reactive({
  title: '',
});

const toAbout = () => {
  router.push({
    path: '/about',
  });
};

TestApi()
  .then((res) => {
    data.title = res.text;
  })
  .catch((err) => console.log(err));
</script>

<style lang="less" scoped>
.route {
  background: rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  animation: slideInDown 1s linear infinite alternate;
  a {
    cursor: pointer;
  }
}
</style>
