<template>
  <div class="search">
    <img src="@/assets/images/mipmap-hdpi/icon_search.png" alt srcset>
    <input class="input" type="text" v-model="keyword">
    <div class="button" @click="onSearch">搜索</div>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  props: ["title"],
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSearch(){
      this.$emit('onSearch',this.keyword)
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  background-color: #ededee;
  height: 30px;
  padding: 0 10px;
  display: flex;
  border-radius: 2px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px;;
  box-sizing: border-box;
  .input {
    flex: 1;
    background-color: #ededee;
    border: none;
    outline: none;
    height: 100%;
    color: #989A9D;
    padding-left: 10px;
    font-size: 14px;
  }
  img{
    height: 10px;
    width: 10px;
  }
  .button {
    border-left: 1px solid #989a9d;
    padding-left: 10px;
    color: #989A9D;
    font-size: 12px;
  }
}
</style>
