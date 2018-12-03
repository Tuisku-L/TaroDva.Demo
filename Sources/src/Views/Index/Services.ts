import Request from '../../Utils/Request';
import { JsonResult } from '../../Entities/JsonResult';

let GetIndexList = (pageIndex: number): JsonResult => {
    return Request('/api/Goods', { pageIndex });
};

export {
    GetIndexList
};
