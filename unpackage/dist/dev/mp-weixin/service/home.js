"use strict";
const service_index = require("./index.js");
const getHomeMultidata = () => {
  return service_index.mockRequest.get({
    url: "/m2/2138323-0-default/56490973"
  });
};
const getHomeData = (type, page) => {
  return service_index.axRequest.get({
    url: "/home/data",
    data: {
      type,
      page
    }
  });
};
exports.getHomeData = getHomeData;
exports.getHomeMultidata = getHomeMultidata;
