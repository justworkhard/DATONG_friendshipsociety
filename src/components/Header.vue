<template>
  <div class="body">
    <div class="logo" v-if="!logo">
      <img src="@/assets/images/mipmap-hdpi/logo.png" alt>
    </div>
    <div class="tabs" :style="{'background-color':Bcolor,'color':Fcolor}">
      <div class="tab_pane" v-for="(item,index) in tabList" :key="index">
        <router-link :to="item.url">
          <p class="label" :style="{'color':Fcolor}">{{item.title}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  name: "HelloWorld",
  props: ["tabList", "logo", "Bcolor", "Fcolor"],
  data() {
    return {
    };
  }
};
</script>
<style lang="less" scoped>
.logo {
  padding: 7px 15px;
  height: 48px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
}
.tabs {
  display: flex;
  width: 100%;
  overflow: scroll;
  padding: 16px 15px;
  box-sizing: border-box;
  background-color: #b61413;
  color: #ffffff;
  font-size: 14px;
  .tab_pane {
    white-space: nowrap;
    margin-right: 20px;
    cursor: pointer;
    &:last-child {
      padding-right: 15px;
    }
  }
}
.label {
  color: #ffffff;
}
</style>
