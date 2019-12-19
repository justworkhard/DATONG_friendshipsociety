import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


let RouterPhone = new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/second/menu",
      name: "Index",
      component: resolve => require(["@/pages/secendMenu"], resolve)
    },
    {
      path: "/",
      name: "Index",
      component: resolve => require(["@/pages/index"], resolve)
    },
    {
      path: "/newsdetail",
      name: "newsdetail",
      component: resolve => require(["@/pages/news/newsDetail"], resolve)
    },

    // 政策服务
    {
      path: "/policy",
      name: "policy",
      component: resolve => require(["@/pages/policy"], resolve)
    },

    //法律服务平台
    {
      path: "/law",
      name: "law",
      component: resolve => require(["@/pages/law"], resolve)
    },
    //企业营业管理平台
    {
      path: "/business/consulting",
      name: "BusinessConsulting",
      component: resolve => require(["@/pages/businessConsulting"], resolve)
    },
    //平台项目推荐平台
    {
      path: "/product/recommend",
      name: "ProductRcommend",
      component: resolve => require(["@/pages/productRecommend"], resolve)
    },
    //企业融资咨询平台
    {
      path: "/financing/consultation",
      name: "financingConsultation",
      component: resolve => require(["@/pages/financingConsultation"], resolve)
    },
    //创业创新服务平台
    {
      path: "/entrep",
      name: "entrep",
      component: resolve => require(["@/pages/entrep"], resolve)
    },
   
    //企业产品展示平台
    {
      path: "/product/show",
      name: "productShow",
      component: resolve => require(["@/pages/productShow"], resolve)
    },
    //社会信息服务平台
    {
      path: "/social/message",
      name: "socialMessage",
      component: resolve => require(["@/pages/socialMessage"], resolve)
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
    // 排行榜
    {
      path: "/readRank",
      name: "SpreadAdvanced",
      component: resolve => require(["@/pages/rank/readIndex"], resolve)
    },
    {
      path: "/interRank",
      name: "SpreadAdvanced",
      component: resolve => require(["@/pages/rank/interIndex"], resolve)
    },
   
  ]
});

// ====================================================== //
let RouterPC = new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/second/menu",
      component: resolve => require(["@/pcpages/main"], resolve),
      children: [
        {
          path: "/",
          component: resolve => require(["@/pcpages/secondMenu"], resolve)
        },
        {
          path: "/second/menu/solo",
          component: resolve => require(["@/pcpages/secondMenuSolo"], resolve)
        }
      ]
    },
    {
      path: "/search",
      component: resolve => require(["@/pcpages/search"], resolve)
    },
    {
      path: "/policy/service",
      component: resolve => require(["@/pcpages/policy"], resolve),
      children: [
        {
          path: "/",
          component: resolve => require(["@/pcpages/policy/main"], resolve)
        }
        // {
        //   path: "/policy/service/second/menu",
        //   component: resolve =>
        //     require(["@/pcpages/policy/secondMenu"], resolve)
        // }
      ]
    },
    {
      path: "/law",
      component: resolve => require(["@/pcpages/law"], resolve),
      children: [
        {
          path: "/",
          component: resolve => require(["@/pcpages/law/main"], resolve)
        }
      ]
    },
    {
      path: "/project/promot",
      component: resolve => require(["@/pcpages/projectPromot"], resolve),
      children: [
        {
          path: "/",
          component: resolve =>
            require(["@/pcpages/projectPromot/main"], resolve)
        }
      ]
    },
    {
      path: "/finance/advi",
      component: resolve => require(["@/pcpages/financeAdvi"], resolve),
      children: [
        {
          path: "/",
          component: resolve => require(["@/pcpages/financeAdvi/main"], resolve)
        }
      ]
    },
    {
      path: "/entreAndInnova",
      component: resolve => require(["@/pcpages/entreAndInnova"], resolve),
      children: [
        {
          path: "/",
          component: resolve =>
            require(["@/pcpages/entreAndInnova/main"], resolve)
        }
      ]
    },
    {
      path: "/project/show",
      component: resolve => require(["@/pcpages/productShow"], resolve),
      children: [
        {
          path: "/",
          component: resolve => require(["@/pcpages/productShow/main"], resolve)
        }
      ]
    },
    {
      path: "/promote/experien",
      component: resolve => require(["@/pcpages/promoteExperien"], resolve),
      children: [
        {
          path: "/",
          component: resolve =>
            require(["@/pcpages/promoteExperien/main"], resolve)
        }
      ]
    },
    {
      path: "/export/country",
      component: resolve => require(["@/pcpages/exportCountry"], resolve),
      children: [
        {
          path: "/",
          component: resolve =>
            require(["@/pcpages/exportCountry/main"], resolve)
        }
      ]
    },
    {
      path: "/social/information",
      component: resolve => require(["@/pcpages/socialInformation"], resolve),
      children: [
        {
          path: "/",
          component: resolve =>
            require(["@/pcpages/socialInformation/main"], resolve)
        }
      ]
    },

    {
      path: "/",
      component: resolve => require(["@/pcpages/index"], resolve),
      children: [
        {
          path: "/",
          component: resolve => require(["@/pcpages/index/main"], resolve)
        },

      ]
    }
  ]
});

let route;
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  route = RouterPhone;
} else {
  route = RouterPC;
}
export default route;
