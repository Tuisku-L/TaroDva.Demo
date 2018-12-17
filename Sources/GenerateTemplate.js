const fs = require("fs");
const dirName = titleCase(process.argv[2]);

if (!dirName) {
    console.error("页面或模块名称不能为空");
    process.exit(0);
}

const genType = (process.argv[3]).toLowerCase();
if (genType !== "p" && genType !== "c") {
    console.error("生成类型不能为空");
    process.exit(0);
}

// 页面文件模版
const pageTpl = `import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';

import { View } from '@tarojs/components';

import './Index.less';

interface IndexProps {
    dispatch: any;
}

interface IndexState {
}

class Index extends Taro.Component<IndexProps, IndexState> {
    config: Config = {
        navigationBarTitleText: '${dirName}'
    }

    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    public render(): JSX.Element {
        return (
            <View />
        );
    }
}

export default connect(({ ${dirName} }) => ${dirName})(Index);

`;

// 组件文件模版
const compTpl = `import Taro from '@tarojs/taro';

import { View } from '@tarojs/components';

import './${dirName}.less';

interface ${dirName}Props {
}

interface ${dirName}State {
}

export default class ${dirName} extends Taro.Component<${dirName}Props, ${dirName}State> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    public render(): JSX.Element {
        return (
            <View />
        );
    }
}

`;

// model文件模版
const modelTpl = `import * as Services from './Services';

export default {
    namespace: '${dirName}',
    state: {
    },
    effects: {

    },
    reducers: {
        setState(state: any, { payload }: any): void {
            return { ...state, ...payload };
        }
    }
}

`;

//service文件模版
const serviceTpl = `import Request from '../../Utils/Request';
import { JsonResult } from '../../Entities/JsonResult';

export {
};

`;

// 创建页面
if (genType === "p") {
    fs.mkdirSync(`./src/Views/${dirName}`);
    process.chdir(`./src/Views/${dirName}`);

    fs.writeFileSync('Index.tsx', pageTpl);
    fs.writeFileSync('Index.less', '');
    fs.writeFileSync('Model.ts', modelTpl);
    fs.writeFileSync('Services.ts', serviceTpl);

    // 将Model注册到主文件
    process.chdir(__dirname);
    process.chdir("./src/Models");

    let modelInfo = fs.readFileSync("Index.ts", "utf-8");
    modelInfo = `import ${dirName}Model from '../Views/${dirName}/Model';\n` + modelInfo;
    modelInfo = insertStr(modelInfo, `\n    ${dirName}Model,`, modelInfo.indexOf('[') + 1);

    fs.writeFileSync('Index.ts', modelInfo);
}

// 创建组件
if (genType === "c") {
    fs.mkdirSync(`./src/Components/${dirName}`);
    process.chdir(`./src/Components/${dirName}`);

    fs.writeFileSync(`${dirName}.tsx`, compTpl);
    fs.writeFileSync(`${dirName}.less`, '');
}

console.log(`模版${dirName}已创建,请手动至app.tsx文件添加页面路径`);

function titleCase(str) {
    const array = str.toLowerCase().split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
    }
    const string = array.join(' ');
    return string;
}

function insertStr(soure, newStr, start) {
    return soure.slice(0, start) + newStr + soure.slice(start)
}

process.exit(0);