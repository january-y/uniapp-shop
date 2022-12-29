"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const handleItemClick = (item) => {
      console.log(item);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommends, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => handleItemClick(item), item.image),
            d: item.image
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF/uniapp/uni-mall/pages/home/cpns/home-recommend.vue"]]);
wx.createComponent(Component);
