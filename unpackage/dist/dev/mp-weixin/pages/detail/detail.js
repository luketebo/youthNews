"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_tool = require("../../utils/tool.js");
var stores_counter = require("../../stores/counter.js");
const __default__ = {
  data() {
    return {
      options: null,
      detail: {}
    };
  },
  onLoad(e) {
    this.options = e;
    this.getDetail();
  },
  methods: {
    getDetail() {
      common_vendor.index.request({
        url: "https://ku.qingnian8.com/dataApi/news/detail.php",
        data: this.options,
        success: (res) => {
          res.data.posttime = utils_tool.parseTime(res.data.posttime);
          res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width: 100%"');
          this.detail = res.data;
          this.saveHistory();
          common_vendor.index.setNavigationBarTitle({
            title: this.detail.title
          });
        }
      });
    },
    saveHistory() {
      let historyArr = common_vendor.index.getStorageSync("historyArr") || [];
      let item = {
        id: this.detail.id,
        classid: this.detail.classid,
        picurl: this.detail.picurl,
        title: this.detail.title,
        looktime: utils_tool.parseTime(Date.now())
      };
      historyArr.unshift(item);
      common_vendor.index.setStorageSync("historyArr", historyArr);
    }
  },
  computed: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "detail",
  setup(__props) {
    const store = stores_counter.useItemStore();
    let item = {
      id: 51,
      classid: 234,
      pirurl: "asdfas",
      title: "pinia",
      looktime: "2022-11-12"
    };
    store.updateItemArr(item);
    console.log(store.itemArr);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.detail.title),
        b: common_vendor.t(_ctx.detail.author),
        c: common_vendor.t(_ctx.detail.posttime),
        d: _ctx.detail.content
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3e159eb4"], ["__file", "D:/Code-repository/Hbuilder/youthNews/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
