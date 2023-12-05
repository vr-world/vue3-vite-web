<template>
  <h1>{{ data.title }}</h1>
  <img src="@/assets/vue.svg" alt="" class="img" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { AboutApi } from '@/apis';
const data = reactive({
  title: '',
});

AboutApi()
  .then((res) => {
    data.title = res.text;
  })
  .catch((err) => console.log(err));
</script>
<style lang="less" scoped>
.img {
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 0 2em #646cff);
}
</style>
