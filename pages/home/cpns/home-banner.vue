<template>
	<swiper
		:indicator-dots="true"
		:autoplay="true"
		:interval="3000"
		:duration="1000"
		class="swiper"
		indicator-active-color="#ff8198"
	>
		<template v-for="(item, index) in banners" :key="item.image">
			<swiper-item @click="handleNavigation(item)">
				<image :src="item.image" mode="widthFix" class="swiper-item"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
	const handleNavigation = (item) => {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + item.link,
		})
	}
</script>

<style lang="less">
.swiper {
	.swiper-item{
		width: 100%;
	}
}
</style>