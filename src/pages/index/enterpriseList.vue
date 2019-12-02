<template>
  <div>
    <ScrollTemp title="联谊会企业">
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
    </ScrollTemp>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import ScrollTemp from "@/components/scrollTemp.vue";
import ComponyCard from "./componyCard.vue";
export default {
  components: {
    XHeader,
    ComponyCard,
    ScrollTemp
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.content {
  padding: 15px;
}
</style>
