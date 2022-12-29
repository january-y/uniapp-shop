"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "grid-item",
  props: {
    itemData: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.itemData.show.img,
        b: common_vendor.t(__props.itemData.title),
        c: common_vendor.t("\xA5" + __props.itemData.price),
        d: common_vendor.t(__props.itemData.cfav)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF/uniapp/uni-mall/components/grid-item/grid-item.vue"]]);
wx.createComponent(Component);
