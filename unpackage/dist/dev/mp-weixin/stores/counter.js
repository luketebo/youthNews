"use strict";
var common_vendor = require("../common/vendor.js");
const useItemStore = common_vendor.defineStore("item", {
  state: () => {
    return {
      itemArr: [{
        id: 51,
        classid: 231,
        picurl: "dfasdfasd",
        title: "good time",
        looktime: "2020-10-22"
      }],
      count: 0
    };
  },
  getters: {},
  actions: {
    updataItemArr(item) {
      console.log(item);
    }
  }
});
exports.useItemStore = useItemStore;
