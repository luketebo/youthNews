<template>
	<view class="user">
		<view class="top">
			<view class="up">
				<view class="avatar">
					<image src="../../static/image/1.jpg" mode="center"></image>
				</view>
				<view class="userinfo">
					<text class="username"> Luketebo </text>
					<text class="userphone"> 123456789</text>
				</view>
			</view>

		</view>
		<view class="content">
			<view class="item" :key=index v-for="(item, index) in arr" @click="getItem(index)"> {{ item }}</view>
		</view>
	</view>
</template>

<script setup>
	const arr = ["设置", "地址", "历史浏览", "联系我们", "联系我们", "联系我们", "联系我们", "联系我们", "联系我们", "联系我们"];
	const listArr = [];

	const getItem = (index) => {
		if (index == 2) {
			uni.navigateTo({
				url: '/pages/history/history'
			})
		}
	};
</script>

<style lang="scss" scoped>
	.top {
		margin-top: 25rpx;
		margin-left: 25rpx;
		height: 360rpx;
		width: 700rpx;
		border-radius: 15px;
		background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);

		.up {
			display: flex;
			padding-top: 100rpx;
			padding-left: 50rpx;

			.avatar {
				height: 130rpx;
				width: 130rpx;
				// background-color: pink;
				border-radius: 50%;
				overflow: hidden;

				image {
					height: 100%;
					width: 100%;
				}
			}

			.userinfo {
				padding-left: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.username {
					color: white;
				}

				.userphone {
					color: white;
				}

			}
		}
	}

	.content {
		padding-top: 25rpx;
		margin-left: 25rpx;

		.item {
			display: flex;
			align-items: center;
			height: 80rpx;
			border-bottom: 1rpx solid #ccc;
		}
	}
</style>
