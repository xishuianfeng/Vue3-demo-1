<template>
  <div>Tab 示例</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
  components:{
    Tab,Tabs
  },
  setup(){
    const x = ref('导航1')
    return {x}
  }
}
</script>

<style lang="scss">

</style>