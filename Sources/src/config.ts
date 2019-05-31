/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2019-05-31 09:13:06
 * @Description: 全局配置
 */


let config = {
    env: {
        development: {
            serviceHost: 'https://example.com'
        },
        production: {
            serviceHost: ''
        }
    },
    serviceHost: ""
}

const isDevelopment = process.env.NODE_ENV === 'development';

config.serviceHost = isDevelopment ? config.env.development.serviceHost : config.env.production.serviceHost;

export default config;