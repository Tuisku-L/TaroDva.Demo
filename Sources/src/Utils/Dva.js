/*
 * @Author: Tuisku
 * @Date: 2018-12-03 10:27:38
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:37:03
 * @Description: dva帮助类，此文件请勿修改
 */
import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}
