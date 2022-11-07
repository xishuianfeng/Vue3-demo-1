<template>
<button class="cai-switch" @click="toggle" :class="{ 'cai-checked':value }"> <span> </span> </button>
</template>

<script lang="ts">

export default {
  props:{
    value:Boolean
  },
  setup(props,context){
    const toggle =() =>{
      context.emit('update:value',!props.value)
    } 
    return { toggle}
  } 
}
</script>

<style lang="scss" >
  $h:22px;
  $h2:$h - 4px;
  .cai-switch{
    height: $h;
    width: $h * 2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  > span{
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 /2;
      transition: left 250ms;
    }
  }
  button.cai-checked {
    background: lightblue;
  }
  button.cai-checked > span{
    left: calc(100% - 2px - #{$h2});
  }
  // button:focus{
  //   outline: none;
  // }
</style>