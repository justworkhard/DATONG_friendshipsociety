<template>
  <div class="compony_card">
    <a href class="logo">
      <img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=781343902,2605805568&fm=26&gp=0.jpg"
        alt
      >
    </a>
    <div class="txt">
      <p class="title">
        <a href="/newscontent?NewsID=5867" target="_blank">大同市华林有限责任公司</a>
      </p>
      <div
        class="content"
      >山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物中心和综合大卖场为主，现拥有华林商厦、华林新天地、华林新时尚百货、华林超市等七家大卖场，总建筑面积达170000平方米，拥有员工近8000人，在山西省同行业中占有重要地位。...</div>
    </div>
    <div class="date">
      2019
      <b>03-02</b>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.compony_card {
  position: relative;
  padding: 15px;
  height: 164px;;
  border-bottom: 1px solid #e7e7e7;
  background-color: #f9f9f9;
  &:nth-child(2n) {
      background-color: #ffffff;
    .date {
      background-color: #f86866;
    }
  }
  .logo {
    margin: 0 20px 0 0;
    overflow: hidden;
    width: 245px;
    height: 164px;
    position: absolute;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .txt {
    margin-left: 265px;
  }
  .title {
    font-size: 20px;
    height: 26px;
    line-height: 26px;
    padding-top: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    a {
      color: #1e1e1e;
    }
  }
  .content {
    font-size: 14px;
    line-height: 30px;
    margin-top: 20px;
    color: #646464;
    overflow: hidden;
  }
  .date {
    position: absolute;
    width: 50px;
    font-size: 20px;
    color: #fff;
    line-height: 25px;
    font-family: "Georgia", "Bookman Old Style", "Impact";
    right: 8px;
    top: 8px;
    text-align: center;
    padding: 7px 10px;
    background-color: #0f7edd;
    b {
      display: block;
      font-weight: normal;
      font-size: 16px;
    }
  }
}
</style>
