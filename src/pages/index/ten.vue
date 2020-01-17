<template>
  <div class="box">
    <div class="column" v-for="(cloumn,index) in data" :key="index">
      <div class="item" v-for="(item,index2) in cloumn" :key="index2">
        <router-link :to="item.url"><img :src="getImage(item.name)" alt srcset ></router-link>
      </div>
    </div>
    <div class="column">
      <div class="item_full" >
        <router-link to="/export/country"><img :src="getImage(9)" alt srcset></router-link>
      </div>
    </div>
     <div class="column">
      <div class="item_full" >
        <router-link to="/spread/advanced"><img :src="getImage(10)" alt srcset></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      data: [[{name:1,url:'/policy'}, {name:2,url:'/law'}], [{name:3,url:'/business/consulting'}, {name:4,url:'/product/recommend'}], [{name:5,url:'/financing/consultation'}, {name:6,url:'/entrep'}], [{name:7,url:'/product/show'}, {name:8,url:'/social/message'}]]
    };
  },
  methods: {
    getImage(index) {
      let url = `/src/assets/images/mipmap-hdpi/ten_${index}.png`;
      return url;
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  .item {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item_full{
    width: 100%;
      img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
