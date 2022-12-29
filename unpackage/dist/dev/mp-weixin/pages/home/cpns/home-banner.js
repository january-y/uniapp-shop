"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const handleNavigation = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + item.link
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleNavigation(item), item.image),
            c: item.image
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF/uniapp/uni-mall/pages/home/cpns/home-banner.vue"]]);
wx.createComponent(Component);
