<template>
  <div>
    <XHeader title="政策汇总"></XHeader>
    <Tabs :TabsList="tabList">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <Search></Search>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
        </div>
        <div v-if="slotProps.slotdata===1"></div>
        <div v-if="slotProps.slotdata===1"></div>
        <div v-if="slotProps.slotdata===1"></div>
      </template>
    </Tabs>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import Tabs from "@/components/Tabs.vue";
import Search from "@/components/Search.vue";
import NewsCar from "@/components/newsCar.vue";

export default {
  components: {
    XHeader,
    Tabs,
    Search,
    NewsCar
  },
  data() {
    return {
      tabList: ["国务院", "省级政策", "市级政策", "区级政策"],
      
    };
  }
};
</script>
<style lang="less" scoped>
</style>
