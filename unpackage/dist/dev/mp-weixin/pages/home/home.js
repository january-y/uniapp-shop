"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (homeBanner + homeRecommend + tabControl + gridItem + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const homeBanner = () => "./cpns/home-banner.js";
const homeRecommend = () => "./cpns/home-recommend.js";
const tabControl = () => "../../components/tab-control/tab-control.js";
const gridItem = () => "../../components/grid-item/grid-item.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const titles = [
      { title: "\u6D41\u884C", id: 0 },
      { title: "\u65B0\u6B3E", id: 1 },
      { title: "\u7CBE\u9009", id: 2 }
    ];
    common_vendor.onLoad(() => {
      homeStore.getHomeMultidataAction();
      homeStore.getHomeDataAction("pop", 1);
      homeStore.getHomeDataAction("new", 1);
      homeStore.getHomeDataAction("sell", 1);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          banners: common_vendor.unref(homeStore).banners
        }),
        b: common_vendor.p({
          recommends: common_vendor.unref(homeStore).recommends
        }),
        c: common_vendor.p({
          titles
        }),
        d: common_vendor.f(common_vendor.unref(homeStore).goodsList.pop.list, (item, index, i0) => {
          return {
            a: "c8e0499c-5-" + i0 + "," + ("c8e0499c-4-" + i0),
            b: common_vendor.p({
              itemData: item
            }),
            c: "c8e0499c-4-" + i0 + ",c8e0499c-3",
            d: index
          };
        }),
        e: common_vendor.p({
          column: 2,
          showBorder: false,
          square: false,
          highlight: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF/uniapp/uni-mall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
