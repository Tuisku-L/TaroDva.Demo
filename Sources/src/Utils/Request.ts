/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:36:39
 * @Description: Request封装
 */

import Taro from '@tarojs/taro';
import config from '../config';
import { JsonResult } from 'src/Entities/JsonResult';

/** 
 * @description: Request方法，对后端进行请求
 * @param {string} url 后端url地址
 * @param {any} data 请求附带的参数
 * @param {any} method （可选参数）请求类型，（'GET'|'POST'|'PUT'|'DELETE'|'OPTIONS')，默认为'GET'
 * @param {boolean} onlyDate （可选参数）是否只return数据，默认为true，若设为false则将后端返回值完整return
 * @param {any} header （可选参数）请求的header
 * @return {JsonResult|any} 返回值
 */
export default (url: string, data: any, method: any = 'GET', onlyDate: boolean = true, header: any = { 'Content-Type': 'application/json' }): JsonResult | any => {
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
            if (onlyDate) {
                return data.returnObj;
            }
            return data;
        } else {
            throw new Error(`网络请求错误，状态码${statusCode}`);
        }
    })
}