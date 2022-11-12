"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const arr = ["\u8BBE\u7F6E", "\u5730\u5740", "\u5386\u53F2\u6D4F\u89C8", "\u8054\u7CFB\u6211\u4EEC", "\u8054\u7CFB\u6211\u4EEC", "\u8054\u7CFB\u6211\u4EEC", "\u8054\u7CFB\u6211\u4EEC", "\u8054\u7CFB\u6211\u4EEC", "\u8054\u7CFB\u6211\u4EEC", "\u8054\u7CFB\u6211\u4EEC"];
    const getItem = (index) => {
      if (index == 2) {
        common_vendor.index.navigateTo({
          url: "/pages/history/history"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(arr, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => getItem(index), index)
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80842834"], ["__file", "D:/Code-repository/Hbuilder/youthNews/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
