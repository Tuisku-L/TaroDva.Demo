/*
 * @Author: Tuisku 
 * @Description: 全局配置
 * @Date: 2018-04-18 14:19:46 
 * @Last Modified by: Tuisku
 * @Last Modified time: 2018-05-25 16:49:01
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