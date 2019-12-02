<template>
  <div>
    <XHeader title="观点观察"></XHeader>

          <Search></Search>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
          <NewsCar ></NewsCar>
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
      tabList: ["政策解读", "中小微企业政策", "民营企业政策", "区级政策"],
      
    };
  }
};
</script>
<style lang="less" scoped>
</style>
