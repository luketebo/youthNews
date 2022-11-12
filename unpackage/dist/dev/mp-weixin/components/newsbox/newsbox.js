"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "newsbox",
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: "\u6807\u9898",
          author: "yang",
          hits: 4040,
          picurl: "/static/image/1.jpg"
        };
      }
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.picurl,
    b: common_vendor.t($props.item.title),
    c: !$props.item.looktime
  }, !$props.item.looktime ? {
    d: common_vendor.t($props.item.author),
    e: common_vendor.t($props.item.hits)
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f6f6794"], ["__file", "D:/Code-repository/Hbuilder/youthNews/components/newsbox/newsbox.vue"]]);
wx.createComponent(Component);
