<template>
  <div>
    <XHeader title="劳动法"></XHeader>
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
      tabList: ["劳动法", "社会保险法", "劳动争议法", "劳务派遣", "其他"],
      
    };
  }
};
</script>
<style lang="less" scoped>
</style>
