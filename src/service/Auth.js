import { BaseUrl, APIS } from "../config/constants/URLS";
import fetch from "../config/interceptor/interceptor";


export const loginService= (data) => {
    return fetch({
        method : 'post' ,
        url : BaseUrl + APIS.AUTH.login ,
        data,
        Header : {}
    });
}

export const registerService= async (data) => {
    return fetch({
        method : 'post' ,
        url : BaseUrl + APIS.AUTH.register ,
        data
    });
}

export const logoutService= async () => {
    return fetch({
        method : 'get' ,
        url : BaseUrl + APIS.AUTH.logout ,
    });
}

export const refreshAccessToken = async  (refreshToken, expiredAccessToken) => {
  return fetch({
    method: "get",
    url: BaseUrl + APIS.AUTH.refreshToken +`/${refreshToken}?expiredToken=${expiredAccessToken}`,
  });
};
