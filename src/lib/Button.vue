<template>
    <button class="cai-button" :class="classes">
      <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props:{
    theme:{
      type:String,
      default:'button'
    },
    size:{
      type:String,
      default:'normal'
    },
  },
  setup(props){
    const {theme,size} = props;
    const classes = computed(()=>{
      return {
        [`cai-theme-${theme}`]: theme,
        [`cai-size-${size}`]: size,
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
$h:23px;
  $border-color:#d9d9d9;
  $color:#333;
  $blue:#40a9ff;
  $radius:4px;
  .cai-button{
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black,0.95);
    &+&{
      margin-left: 8px;
    }
    &:hover,&:focus{
      color: $blue;
      border-color:$blue;
    }
    &::-moz-focus-inner{
      border: 0;
    }
    
    &.cai-theme-link{
      border-color: transparent;
      box-shadow: none;
      color: $blue;
      &:hover,&:focus{
        color: lighten($blue, 10%);
      }
    }
    &.cai-theme-text{
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,&:focus{
        background: darken(white, 5%);;
      }
    }
    &.cai-theme-button {
      &.cai-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px
      }

      &.cai-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
      }
    }
  }
</style>