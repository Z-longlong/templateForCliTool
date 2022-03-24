<template>
  <div>
    <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
    <br />
    <button @click="updateName">修改store中的name</button>
  </div>
</template>
<script lang="ts" setup>
import { useMainStore } from '@/store'

const mainStore = useMainStore()
const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>
