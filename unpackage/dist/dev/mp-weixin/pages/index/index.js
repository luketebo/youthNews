"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      navIndex: 0,
      navArr: [],
      newsArr: [],
      current: 1,
      loading: 0
    };
  },
  onLoad() {
    this.getNavNews();
    this.getNews();
  },
  onReachBottom() {
    if (this.loading == 2) {
      return;
    }
    this.loading = 1;
    this.current++;
    this.getNews();
  },
  methods: {
    clickNav(index, id) {
      this.navIndex = index;
      this.current = 1;
      this.newsArr = [];
      this.loading = 0;
      this.getNews(id);
    },
    goDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?cid=${item.cid}&id=${item.id}`
      });
    },
    getNavNews() {
      common_vendor.index.request({
        url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
        success: (res) => {
          this.navArr = res.data;
        }
      });
    },
    getNews(id = 50) {
      common_vendor.index.request({
        url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
        data: {
          cid: id,
          page: this.current
        },
        success: (res) => {
          if (res.data.length == 0) {
            this.loading = 2;
          }
          this.newsArr = [...this.newsArr, ...res.data];
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_newsbox2 = common_vendor.resolveComponent("newsbox");
  _easycom_newsbox2();
}
const _easycom_newsbox = () => "../../components/newsbox/newsbox.js";
if (!Math) {
  _easycom_newsbox();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.navArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.classname),
        b: common_vendor.n(index == $data.navIndex ? "active" : ""),
        c: common_vendor.o(($event) => $options.clickNav(index, item.id))
      };
    }),
    b: common_vendor.f($data.newsArr, (item, k0, i0) => {
      return {
        a: "57280228-0-" + i0,
        b: common_vendor.p({
          item
        }),
        c: common_vendor.o(($event) => $options.goDetail(item))
      };
    }),
    c: !$data.newsArr.length
  }, !$data.newsArr.length ? {} : {}, {
    d: $data.newsArr.length
  }, $data.newsArr.length ? common_vendor.e({
    e: $data.loading == 1
  }, $data.loading == 1 ? {} : {}, {
    f: $data.loading == 2
  }, $data.loading == 2 ? {} : {}) : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/Code-repository/Hbuilder/youthNews/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
