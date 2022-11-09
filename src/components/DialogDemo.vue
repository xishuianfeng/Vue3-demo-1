<template>
  <div>Dialog 示例</div>
  <h1>示例</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2" title="title的子目">
    <div>你好</div>
    <div>hi!</div>
  </Dialog>
  
  <!-- <h1>示例2</h1>
  <Button @click="showDialog">toggle</Button> -->
</template>

<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog'
import { ref } from 'vue';
export default {
  components:{
    Dialog, Button
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value=!x.value
    }
    const f1 = () =>{
      return false
    }
    const f2 = () => { }
    const showDialog = () => {
      openDialog({
        title:'标题',
        content:'你好'
      })
    } 
    return { x, toggle, f1, f2, showDialog }
    },
} 
</script>

<style>

</style>