import Request from '../../Utils/Request';
import { JsonResult } from '../../Entities/JsonResult';

let GetIndexList = (pageIndex: number): JsonResult => {
    // return Request('/api/Goods', { pageIndex });
    const demoResult: JsonResult = {
        code: 200,
        message: "",
        returnObj: [
            {
                id: 1,
                name: "Goods 1",
                price: 19.9
            },
            {
                id: 2,
                name: "Goods 2",
                price: 99.99
            }
        ]
    };

    return demoResult.returnObj;
};

export {
    GetIndexList
};
