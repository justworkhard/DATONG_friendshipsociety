<template>
  <div class="header">
    <img class='back' src="@/assets/images/mipmap-hdpi/icon_back.png" alt srcset v-on:click="goBack()">
    <p class="txt">{{title||''}}</p>
    <slot></slot>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  props: ['title'],
  data() {
    return {
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #333333;
  font-size: 16px;
  line-height: 48px;
  .back {
    height: 14px;
    width: 14px;
    position: absolute;
    left: 15px;
  }
  .txt{
    max-width: 225px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
