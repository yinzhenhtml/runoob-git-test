import service from '../service.js';

const userApi = {
  Authenticate: '/TokenAuth/Authenticate'
}

export function Authenticate (parameter) {
    return uni.request({
	    url: service.apiUrl+userApi.Authenticate,
		method: "POST",
		data: parameter
    })
}
