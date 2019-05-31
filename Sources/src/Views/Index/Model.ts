/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:44:49
 * @Description: 首页Model类
 */

import * as Services from './Services';
import { Goods } from 'src/Entities/Core/Goods';

export default {
    namespace: 'Index',
    state: {
    },
    effects: {
        *GetIndexList({ payload }, { call, put }) {
            let { pageIndex } = payload;

            let result: Array<Goods> = yield call(Services.GetIndexList, pageIndex);

            yield put({ type: "setState", payload: { goodsList: result } });
        }
    },
    reducers: {
        setState(state: any, { payload }: any): void {
            return { ...state, ...payload };
        }
    }
}