"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("home", () => {
  let banners = common_vendor.ref([]);
  let recommends = common_vendor.ref([]);
  let goodsList = common_vendor.ref({
    pop: { page: 0, list: [] },
    new: { page: 0, list: [] },
    sell: { page: 0, list: [] }
  });
  const getHomeMultidataAction = async () => {
    const res = await service_home.getHomeMultidata();
    banners.value = res.resData.data.banner.list;
    recommends.value = res.resData.data.recommend.list;
  };
  const getHomeDataAction = async (type, page) => {
    const res = await service_home.getHomeData(type, page);
    goodsList.value[type].list.push(...res.data.list);
    goodsList.value[type].page = page;
  };
  return {
    banners,
    recommends,
    goodsList,
    getHomeMultidataAction,
    getHomeDataAction
  };
}, {
  unistorage: false
});
exports.useHomeStore = useHomeStore;
