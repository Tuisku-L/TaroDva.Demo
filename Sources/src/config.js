/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:13:06
 * @Description: 全局配置，设置后端路径和cookies路径等
 */


let config = {
    env: {
        development: {
            serviceHost: 'https://petswear.cn',
            loginUrl: '',
            cookieDomain: ''
        },
        production: {
            serviceHost: '',
            loginUrl: '',
            cookieDomain: ''
        }
    },
    serviceHost: ""
}

const isDevelopment = process.env.NODE_ENV === 'development'

config.serviceHost = isDevelopment ? config.env.development.serviceHost : config.env.production.serviceHost

config.loginUrl = isDevelopment ? config.env.development.loginUrl : config.env.production.loginUrl

config.cookieDomain = isDevelopment ? config.env.development.cookieDomain : config.env.production.cookieDomain

config.appHost = isDevelopment ? config.env.development.appHost : config.env.production.appHost

export default config;