<template>
	<view>
		<web-view :src="link"></web-view>
	</view>
</template>

<script setup>
	const props = defineProps({
		link: {
			type: String,
			default: ''
		}
	})
</script>

<style>

</style>
