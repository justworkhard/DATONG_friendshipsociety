import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  console.log("phone");
} else {
  console.log("pc");
}
let RouterPhone = new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Index",
      component: resolve => require(["@/pages/index"], resolve)
    },
    //加入我们
    {
      path: "/join",
      name: "newslist",
      component: resolve => require(["@/pages/index/join"], resolve)
    },
    {
      path: "/newslist",
      name: "newslist",
      component: resolve => require(["@/pages/news/newsList"], resolve)
    },
    {
      path: "/newsdetail",
      name: "newsdetail",
      component: resolve => require(["@/pages/news/newsDetail"], resolve)
    },
    {
      path: "/enterprise/list",
      name: "enterpriseList",
      component: resolve => require(["@/pages/index/enterpriseList"], resolve)
    },
    {
      path: "/introduce",
      name: "introduce",
      component: resolve => require(["@/pages/index/introduce"], resolve)
    },
    {
      path: "/product/list",
      name: "productList",
      component: resolve => require(["@/pages/index/productList"], resolve)
    },
    // 政策服务
    {
      path: "/policy",
      name: "policy",
      component: resolve => require(["@/pages/policy"], resolve)
    },
    {
      path: "/policy/summary",
      name: "summary",
      component: resolve => require(["@/pages/policy/summary"], resolve)
    },
    {
      path: "/policy/explain",
      name: "inspect",
      component: resolve => require(["@/pages/policy/explain"], resolve)
    },
    {
      path: "/policy/inspect",
      name: "inspect",
      component: resolve => require(["@/pages/policy/inspect"], resolve)
    },
    {
      path: "/policy/chat",
      name: "chat",
      component: resolve => require(["@/pages/policy/chat"], resolve)
    },
    {
      path: "/policy/activeAnddynamic",
      name: "chat",
      component: resolve =>
        require(["@/pages/policy/activeAnddynamic"], resolve)
    },

    //法律服务平台
    {
      path: "/law/zzs",
      name: "LawZZS",
      component: resolve => require(["@/pages/law/zzs"], resolve)
    },
    {
      path: "/law",
      name: "law",
      component: resolve => require(["@/pages/law"], resolve)
    },
    {
      path: "/law/labour",
      name: "law",
      component: resolve => require(["@/pages/law/labour"], resolve)
    },
    {
      path: "/law/companyLaw",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/companyLaw"], resolve)
    },
    {
      path: "/law/proveandattact",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/proveAndattact"], resolve)
    },
    {
      path: "/law/constitution",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/constitution"], resolve)
    },
    {
      path: "/law/civilLaw",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/civilLaw"], resolve)
    },
    {
      path: "/law/commercialLaw",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/commercialLaw"], resolve)
    },
    {
      path: "/law/administrativeLaw",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/administrativeLaw"], resolve)
    },
    {
      path: "/law/taxLaw",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/taxLaw"], resolve)
    },
    {
      path: "/law/guide",
      name: "companyLaw",
      component: resolve => require(["@/pages/law/guide"], resolve)
    },
    //企业营业管理平台
    {
      path: "/business/consulting",
      name: "BusinessConsulting",
      component: resolve => require(["@/pages/businessConsulting"], resolve)
    },
    {
      path: "/business/consulting/list",
      name: "BusinessConsulting",
      component: resolve =>
        require(["@/pages/businessConsulting/newsList"], resolve)
    },
    //平台项目推荐平台
    {
      path: "/product/recommend",
      name: "ProductRcommend",
      component: resolve => require(["@/pages/productRecommend"], resolve)
    },
    {
      path: "/product/recommend/work",
      name: "ProductRcommend",
      component: resolve =>
        require(["@/pages/productRecommend/dynamicWork"], resolve)
    },
    {
      path: "/product/recommend/envir",
      name: "ProductRcommend",
      component: resolve =>
        require(["@/pages/productRecommend/policyEnvir"], resolve)
    },
    {
      path: "/product/recommend/projectRe",
      name: "ProductRcommend",
      component: resolve =>
        require(["@/pages/productRecommend/projectRe"], resolve)
    },
    {
      path: "/product/recommend/zsxx",
      name: "ProductRcommend",
      component: resolve => require(["@/pages/productRecommend/zsxx"], resolve)
    },
    //企业融资咨询平台
    {
      path: "/financing/consultation",
      name: "financingConsultation",
      component: resolve => require(["@/pages/financingConsultation"], resolve)
    },
    {
      path: "/financing/consultation/list",
      name: "financingConsultation",
      component: resolve =>
        require(["@/pages/financingConsultation/list"], resolve)
    },
    //创业创新服务平台
    {
      path: "/entrep",
      name: "entrep",
      component: resolve => require(["@/pages/entrep"], resolve)
    },
    {
      path: "/entrep/BSATPT",
      name: "entrep",
      component: resolve => require(["@/pages/entrep/BSATPT"], resolve)
    },
    {
      path: "/entrep/doubleE",
      name: "entrep",
      component: resolve => require(["@/pages/entrep/doubleE"], resolve)
    },
    {
      path: "/entrep/serve",
      name: "entrep",
      component: resolve => require(["@/pages/entrep/serve"], resolve)
    },
    //企业产品展示平台
    {
      path: "/product/show",
      name: "productShow",
      component: resolve => require(["@/pages/productShow"], resolve)
    },
    {
      path: "/product/show/list",
      name: "productShow",
      component: resolve => require(["@/pages/productShow/list"], resolve)
    },
    //社会信息服务平台
    {
      path: "/social/message",
      name: "socialMessage",
      component: resolve => require(["@/pages/socialMessage"], resolve)
    },
    {
      path: "/social/message/list",
      name: "socialMessage",
      component: resolve => require(["@/pages/socialMessage/list"], resolve)
    },
    {
      path: "/social/message/financeMes",
      name: "socialMessage",
      component: resolve =>
        require(["@/pages/socialMessage/financeMes"], resolve)
    },
    //对外经济
    {
      path: "/export/country",
      name: "exportCountry",
      component: resolve => require(["@/pages/exportCountry"], resolve)
    },
    // 推进先进经验
    {
      path: "/spread/advanced",
      name: "SpreadAdvanced",
      component: resolve => require(["@/pages/spreadAdvanced"], resolve)
    },
    {
      path: "/spread/advanced/culture",
      name: "SpreadAdvanced",
      component: resolve => require(["@/pages/spreadAdvanced/culture"], resolve)
    },
    {
      path: "/spread/advanced/experience",
      name: "SpreadAdvanced",
      component: resolve =>
        require(["@/pages/spreadAdvanced/Experience"], resolve)
    },
    {
      path: "/spread/advanced/forum",
      name: "SpreadAdvanced",
      component: resolve => require(["@/pages/spreadAdvanced/forum"], resolve)
    },
    {
      path: "/spread/advanced/promoting",
      name: "SpreadAdvanced",
      component: resolve =>
        require(["@/pages/spreadAdvanced/promoting"], resolve)
    }
  ]
});

let RouterPC = new Router({
  routes: [
    {
      path: "/",
      component: resolve => require(["@/pcpages/index"], resolve),
      children:[
        {
          path: "/",
          component: resolve => require(["@/pcpages/index/main"], resolve)
        },
        {
          path: "/menu/list",
          component: resolve => require(["@/pcpages/index/LeftMenu"], resolve),
          children:[
            {
              path: "/menu/list/active",
              component: resolve => require(["@/pcpages/index/active"], resolve),
            },
            {
              path: "/menu/list/introduce",
              component: resolve => require(["@/pcpages/index/introduce"], resolve),
            },
            {
              path: "/menu/list/compony",
              component: resolve => require(["@/pcpages/index/compony"], resolve),
            },
            {
              path: "/menu/list/join",
              component: resolve => require(["@/pcpages/index/join"], resolve),
            },
            {
              path: "/menu/list/news",
              component: resolve => require(["@/pcpages/index/news"], resolve),
            },
            {
              path: "/menu/list/product",
              component: resolve => require(["@/pcpages/index/product"], resolve),
            },
          ]
        },
        {
          path:'law',
          component: resolve => require(["@/pcpages/law/main"], resolve),

        }
      ]
    },
 
  ]
});

let route;
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  route = RouterPhone;
} else {
  route = RouterPC;
}
export default route;
