<template>
	<view class="newsbox">
		<view class="pic">
			<image :src="item.picurl" mode="aspectFit"></image>
		</view>
		<view class="info">
			<view class="title">{{item.title}}</view>
			<view class="detail" v-if="!item.looktime">
				<view class="author">{{item.author}}</view>
				<view class="liulan">
					{{item.hits}}浏览量
				</view>
			</view>
			<view class="detail" v-else>
				浏览时间
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsbox",
		props: {
			item: {
				type: Object,
				default () {
					return {
						title: "标题",
						author: "yang",
						hits: 4040,
						picurl: "/static/image/1.jpg",
						// looktime: "2022-10"
					}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.newsbox {
		border-bottom: 1px solid #eee;
		display: flex;

		.pic {
			height: 160rpx;
			width: 230rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.info {
			flex: 1;
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.title {
				font-size: 35rpx;
				color: black;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.detail {
				display: flex;
				font-size: 25rpx;
				color: #999;

				.author {
					font-size: 25rpx;
					color: #999;
				}

				.liulan {
					font-size: 25rpx;
					padding-left: 25rpx;
					color: #999;
				}
			}
		}
	}
</style>
