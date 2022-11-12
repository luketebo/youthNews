<template>
	<view class="history">
		<view class="row" v-for="item in 10">
			<newsbox></newsbox>
		</view>
		<!-- <view>{{item}}</view> -->

	</view>
</template>

<script setup>


</script>


<style scoped lang="scss">
	.history {
		padding: 25rpx;
	}
</style>
