class AxRequest{
	constructor(config){
		this.timeout = config.timeout
		this.baseUrl = config.baseUrl
	}
	
	request(config){
		return new Promise((resolve,reject) => {
			uni.request({
				...config,
				url: this.baseUrl + config.url,
				method: config.method || "GET",
				timeout: this.timeout,
				data: config.data,
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
	
	get(config){
		return this.request({
			...config,
			method: "GET"
		})
	}
	
	post(config){
		return this.request({
			...config,
			method: "POST"
		})
	}
}

const axRequest = new AxRequest({
	timeout: 10000,
	baseUrl: 'http://152.136.185.210:7878/api/hy66'
})

const mockRequest = new AxRequest({
	timeout: 10000,
	baseUrl: 'https://mock.apifox.cn'
})

export {
	axRequest,
	mockRequest
}