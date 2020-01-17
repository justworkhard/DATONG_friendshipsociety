<template>
  <div>
    <NewsCard @toDetail="toDetail" v-for="(item,index) in data" :key="index" :newsItem='item'></NewsCard>
    <el-pagination
      background
      @current-change="onChangePage"
      layout="prev, pager, next"
      :total="count"
      style="margin-top:20px"
      :hide-on-single-page='true'
    ></el-pagination>
  </div>
</template>
<script>
import NewsCard from "./newsCard";
export default {
  components: { NewsCard },
  props: ["data", 'count'],
  methods: {
    onChangePage(current) {
      this.$emit('onChangePage',current)
    },
    toDetail(id){
      this.$emit('toDetail',id)
    }
  }
};
</script>
<style lang="less" scoped>
</style>
