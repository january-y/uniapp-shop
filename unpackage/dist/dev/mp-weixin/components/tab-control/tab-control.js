"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const currentIndex = common_vendor.ref("");
    const handleTabClick = (index) => {
      currentIndex.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: currentIndex.value == index ? 1 : "",
            c: common_vendor.o(($event) => handleTabClick(index), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF/uniapp/uni-mall/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
