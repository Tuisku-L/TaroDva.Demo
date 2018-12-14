/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:44:49
 * @Description: 首页Model类
 */

import * as Services from './Services';

export default {
    // dva全局生命周期中唯一的namespace，代表此Model
    namespace: 'Index',
    // 可定义Model默认的State，将会转变为连接页面的Props
    state: {
    },
    // Generator函数，即与后端交互的异步函数，其实就是async和await
    effects: {
        *GetIndexList({ payload }: any, { call, put }: any) {
            // 先从payload中解构出需要的参数
            let { pageIndex } = payload;

            // 然后使用yield call这个语法糖去调用Service，并且同步等待数据
            // 其实等于await Services.GetIndexList(pageIndex)
            let result = yield call(Services.GetIndexList, pageIndex);

            // 上一步执行完后，使用yield put语法糖，将后端返回的数据放到Model的State中，最终会变成连接页面的Props并触发连接页面的数据变更导致刷新
            yield put({ type: "setState", payload: { goodsList: result } });
        }
    },
    reducers: {
        setState(state: any, { payload }: any): void {
            return { ...state, ...payload };
        }
    }
}