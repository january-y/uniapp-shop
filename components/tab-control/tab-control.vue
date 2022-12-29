<template>
	<view class="tabs">
		<template v-for="(item, index) in titles" :key="item.id">
			<view
				class="tab"
				:class="{active: currentIndex == index}"
				@click="handleTabClick(index)"
				>
				{{item.title}}
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const props = defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})
	
	const currentIndex = ref('')
	const handleTabClick = (index) => {
		currentIndex.value = index
	}
</script>

<style lang="scss">
.tabs{
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 66rpx;
	font-size: 36rpx;
	.tab{
		padding-bottom: 16rpx;
	}
	.active{
		border-bottom: 2px solid red;
	}
}
</style>