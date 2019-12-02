<template>
  <ScrollList title='企业产品展示' @load='load' @refresh='refresh'>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
    <ComponyCard></ComponyCard>
  </ScrollList>
</template>
 
<script>
import BScroll from 'better-scroll'
import XHeader from "@/components/XHeader.vue";
import ComponyCard from "./componyCard.vue";
import ScrollList from "./scrollList.vue";
export default {
    components:{XHeader,ScrollList, ComponyCard},
    data(){
        return{
            dropDown:false
        }
    },
    mounted(){
      this.load()
    },
    methods:{
      load(){
        console.log('parent load');},
      refresh(){
        console.log('parent refresh');},
      
    }
}
</script>
 
 
<style scoped>

</style>