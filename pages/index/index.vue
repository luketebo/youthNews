<template>
	<view class="home">
		<scroll-view scroll-x="true" class="navBar">
			<view class="item" :class="index == navIndex ? 'active' : '' " v-for="(item, index) in navArr"
				@click="clickNav(index, item.id)">{{item.classname}}
			</view>
		</scroll-view>
		<view class="content">
			<view class="row" v-for="item in newsArr" @click="goDetail(item)">
				<newsbox :item="item"></newsbox>
			</view>
		</view>
		<view class="nodata" v-if="!newsArr.length">
			<image src="../../static/image/1.jpg" mode="widthFix"></image>
		</view>
	</view>
	<view class="footer" v-if="newsArr.length">
		<view v-if="loading == 1">数据加载中。。。</view>
		<view v-if="loading == 2">没有更多了~~~</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				navArr: [],
				newsArr: [],
				current: 1,
				loading: 0 // 0 默认 1 数据加载 2 没有数据
			}
		},
		onLoad() {
			this.getNavNews();
			this.getNews();
		},
		// 生命周期函数
		onReachBottom() {
			if (this.loading == 2) {
				return;
			}
			this.loading = 1
			this.current++
			this.getNews()

		},
		methods: {
			clickNav(index, id) {
				this.navIndex = index;
				this.current = 1
				this.newsArr = []
				this.loading = 0
				this.getNews(id)
			},
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.cid}&id=${item.id}`
				})
			},
			getNavNews() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						this.navArr = res.data
					}
				})
			},
			getNews(id = 50) {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: id,
						page: this.current
					},
					success: res => {
						if (res.data.length == 0) {
							this.loading = 2
						}
						this.newsArr = [...this.newsArr, ...res.data]
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navBar {
		position: fixed;
		left: 0;
		top: var(--window-top);
		height: 100rpx;
		z-index: 10;
		background-color: #F7F8FA;
		white-space: nowrap;

		:deep(::-webkit-scrollbar) {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}

		.item {
			font-size: 33rpx;
			display: inline-block;
			line-height: 100rpx;
			padding: 0 30rpx;
			color: #333;

			&.active {
				color: #1296db;
			}
		}
	}

	.content {
		padding: 20rpx;
		padding-top: 120rpx;

		.row {}
	}

	.nodata {
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 360rpx;
		}
	}

	.footer {
		text-align: center;
		color: #888;
		line-height: 2em;
		font-size: 25rpx;

	}
</style>
