<template>
<div class="cai-tabs">
  <div class="cai-tabs-nav">
    <div class="cai-tabs-nav-item" 
      :class="{selected:t===selected}"
      @click="select(t)"
      v-for="(t, index) in titles" :key="index"
      >{{ t }}
    </div>
  </div>
  <div class="cai-tabs-content">
    <component 
    class="cai-tabs-content-item" 
    :class="{selected:c.props.title === selected}"
    v-for="(c,index) in defaults" :key="index"
    :is="c" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  props:{
    selected:{
      type:String
    }
  },
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
    const select = (title:string )=>{
      context.emit('update:selected',title)
    }
    return{defaults,titles,select}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.cai-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}
</style>