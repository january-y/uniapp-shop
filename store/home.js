import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getHomeMultidata, getHomeData } from '../service/home'

const useHomeStore = defineStore('home',() => {
	let banners = ref([])
	let recommends = ref([])
	let goodsList = ref({
		pop: { page: 0, list: [] },
		new: { page: 0, list: [] },
		sell: { page: 0, list: [] }
	})
	
	const getHomeMultidataAction = async () => {
		const res = await getHomeMultidata()
		banners.value = res.resData.data.banner.list
		recommends.value = res.resData.data.recommend.list
	}
	const getHomeDataAction = async (type, page) => {
		const res = await getHomeData(type, page)
		goodsList.value[type].list.push(...res.data.list)
		goodsList.value[type].page = page
	}
	
	return{
		banners,
		recommends,
		goodsList,
		getHomeMultidataAction,
		getHomeDataAction
	}
},{
	unistorage: false
})

export default useHomeStore