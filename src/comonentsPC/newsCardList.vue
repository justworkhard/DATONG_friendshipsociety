<template>
  <div>
    <NewsCard v-for="(item,index) in data" :key="index"></NewsCard>
    <el-pagination
      background
      @current-change="onChangePage"
      layout="prev, pager, next"
      :total="1000"
      style="margin-top:20px"
    ></el-pagination>
  </div>
</template>
<script>
import NewsCard from "./newsCard";
export default {
  components: { NewsCard },
  props: ["data"],
  methods: {
    onChangePage(current) {
      console.log(current);
      this.$emit('onChangePage',current)
    }
  }
};
</script>
<style lang="less" scoped>
</style>
