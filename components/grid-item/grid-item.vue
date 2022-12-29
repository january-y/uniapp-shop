<template>
	<view class="item">
		<image
			:src="itemData.show.img"
			mode="widthFix"
			class="img"
			lazy-load
		></image>
		<view class="desc">{{itemData.title}}</view>
		<view class="footer">
			<text class="price">{{ '¥' + itemData.price}}</text>
			<text class="rate">{{itemData.cfav}}</text>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	itemData: {
		type: Object,
		default: () => {}
	}
})
</script>

<style lang="scss">
.item{
	margin-top: 8rpx;
	padding: 10rpx;
	.img{
		width: 100%;
		border-radius: 10rpx;
	}
	.desc{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 30rpx;
	}
	.footer{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		margin-top: 4rpx;
		.price{
			font-size: 30rpx;
			color: #ff8198;
		}
		.rate{
	
			margin-left: 10rpx;
			color: #666666;
		}
	}
}
</style>