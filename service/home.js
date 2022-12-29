import { axRequest, mockRequest } from "./index.js"


// export const getHomeMultidata = () => {
// 	return axRequest.get({
// 		url: '/home/multidata',
// 	})
// }
export const getHomeMultidata = () => {
	return mockRequest.get({
		url: '/m2/2138323-0-default/56490973',
	})
}

export const getHomeData = (type, page) => {
	return axRequest.get({
		url: '/home/data',
		data: {
			type,
			page,
		}
	})
}