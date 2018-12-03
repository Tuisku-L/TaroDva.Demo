import * as Services from './Services';

export default {
    namespace: 'Index',
    state: {
    },
    effects: {
        *GetIndexList({ payload }: any, { call, put }: any) {
            let { pageIndex } = payload;
            let result = yield call(Services.GetIndexList, pageIndex);
            yield put({ type: "setState", payload: { goodsList: result } });
        }
    },
    reducers: {
        setState(state: any, { payload }: any): void {
            return { ...state, ...payload };
        }
    }
}