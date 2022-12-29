<template>
	<view class="recommends">
		<template v-for="(item, index) in recommends" :key="item.image">
			<view class="recommends-item" @click="handleItemClick(item)">
				<image :src="item.image" mode="widthFix" class="img"/>
				<view class="title">{{item.title}}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	const props = defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})
	
	const handleItemClick = (item) => {
		console.log(item);
	}
</script>

<style lang="scss">
	.recommends{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		.recommends-item{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: 16rpx;
			.img{
				width: 150rpx;
				height: 150rpx;
			}
			.title{
				margin-top: 6rpx;
				font-size: 30rpx;
			}
		}
	}
</style>