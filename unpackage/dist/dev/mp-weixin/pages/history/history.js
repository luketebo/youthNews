"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_newsbox2 = common_vendor.resolveComponent("newsbox");
  _easycom_newsbox2();
}
const _easycom_newsbox = () => "../../components/newsbox/newsbox.js";
if (!Math) {
  _easycom_newsbox();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: "24bfa630-0-" + i0
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-24bfa630"], ["__file", "D:/Code-repository/Hbuilder/youthNews/pages/history/history.vue"]]);
wx.createPage(MiniProgramPage);
