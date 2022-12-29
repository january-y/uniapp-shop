<template>
	<view class="home">
		<!-- 轮播图 -->
		<home-banner :banners="homeStore.banners"></home-banner>
		<!-- 推荐 -->
		<home-recommend :recommends="homeStore.recommends"></home-recommend>
		<!-- tab-control -->
		<tab-control :titles="titles"></tab-control>
		<!-- 九宫格 -->
		<uni-grid :column="2" :showBorder="false" :square='false' :highlight="false">
			<template v-for="(item, index) in homeStore.goodsList.pop.list" :key="index">
				<uni-grid-item>
					<grid-item :itemData='item'></grid-item>
				</uni-grid-item>
			</template>
		</uni-grid>
		<!--  -->
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import useHomeStore from '../../store/home.js';
import homeBanner from './cpns/home-banner.vue'
import homeRecommend from './cpns/home-recommend.vue'
import tabControl from '@/components/tab-control/tab-control.vue'
import gridItem from '@/components/grid-item/grid-item.vue'

const homeStore = useHomeStore()
const titles = [
	{ title: '流行', id: 0 },
	{ title: '新款', id: 1 },
	{ title: '精选', id: 2 },
]

onLoad(() => {
	homeStore.getHomeMultidataAction()
	homeStore.getHomeDataAction('pop', 1)
	homeStore.getHomeDataAction('new', 1)
	homeStore.getHomeDataAction('sell', 1)
})
</script>

<style lang="less">

</style>
