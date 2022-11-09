<template>
  <div>
    <div v-for="t in titles" :key="t">{{t}}</div>
    <component v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props,context){
    const defaults = context.slots.default()
    defaults.forEach((tag)=>{
      if(tag.type !== Tab){
        throw new Error('Tabs 的字标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag) => {
      if(tag.props !== null){
        return tag.props.title
      }
      return '未知导航'
    }) 
    return{defaults,titles}
  }
}
</script>

<style lang="scss">

</style>