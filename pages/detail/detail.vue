<template>
	<view class="newsDetail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<view class="author">编者： {{detail.author}}</view>
			<view class="time">发布日期： {{detail.posttime}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		<view class="bottom">
			声明：本站的内容均采集与腾讯新闻，如果侵权请联系管理（123456789@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script setup>
	import {
		useItemStore
	} from '@/stores/counter.js'
	// 通过pinia 存储历史记录

	const store = useItemStore()

	let item = {
		id: 51,
		classid: 234,
		pirurl: "asdfas",
		title: "pinia",
		looktime: "2022-11-12"
	}

	store.updateItemArr(item)



	console.log(store.itemArr)
</script>


<script>
	import {
		parseTime
	} from "@/utils/tool.js"
	import {
		useItemStore
	} from '@/stores/counter.js'
	import {
		mapStores,
		mapWritableState
	} from 'pinia'
	export default {
		data() {
			return {
				options: null,
				detail: {}
			};
		},
		onLoad(e) {
			this.options = e
			this.getDetail();
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'https://ku.qingnian8.com/dataApi/news/detail.php',
					data: this.options,
					success: res => {
						res.data.posttime = parseTime(res.data.posttime)
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width: 100%"')
						this.detail = res.data
						this.saveHistory()
						uni.setNavigationBarTitle({
							title: this.detail.title
						})
					}
				});
			},
			saveHistory() {
				let historyArr = uni.getStorageSync("historyArr") || []
				let item = {
					id: this.detail.id,
					classid: this.detail.classid,
					picurl: this.detail.picurl,
					title: this.detail.title,
					looktime: parseTime(Date.now())
				}
				historyArr.unshift(item)
				uni.setStorageSync("historyArr", historyArr)
			}
		},
		computed: {
			// ...mapStores(useItemStore)
			// ...mapWritableState(userItemStore, () => {

			// })
		}
	}
</script>

<style scoped lang="scss">
	.newsDetail {
		padding: 25rpx;

		.title {
			font-size: 40rpx;
			color: #333;
		}

		.info {
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			justify-content: space-between;
			font-size: 25rpx;
			background-color: #F6F6F6;
			margin: 40rpx 0;
		}

		.content {
			padding-bottom: 50rpx;

			image {
				max-width: 100%;
			}
		}

		.bottom {
			background: #FEF0F0;
			color: #F89898;
			font-size: 26rpx;
			padding: 20rpx;
			line-height: 1.8em;
		}
	}
</style>
