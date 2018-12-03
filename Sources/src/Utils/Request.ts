import Taro from '@tarojs/taro';
import config from '../config';

export default (url: string, data: any, onlyDate: boolean = true, header: any = { 'Content-Type': 'application/json' }, method: any = 'GET'): returnObj | any => {
    return Taro.request({
        url: config.serviceHost + url,
        data: data,
        header: header,
        method: method,
    }).then((res) => {
        const { statusCode, data } = res;
        if (statusCode >= 200 && statusCode < 300) {
            if (data.code !== 200) {
                Taro.showToast({
                    title: `${res.data.message}~` || res.data.code,
                    icon: 'none',
                    mask: true,
                });
            }
            if(onlyDate){
                return data.returnObj;
            }
            return data;
        } else {
            throw new Error(`网络请求错误，状态码${statusCode}`);
        }
    })
}