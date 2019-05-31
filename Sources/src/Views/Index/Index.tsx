/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:26:40
 * @Description: 首页 - 页面文件
 */

import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';

import { View, Text } from '@tarojs/components';

import { Goods } from 'src/Entities/Core/Goods';

import GoodsItem from '../../Components/GoodsItem/GoodsItem';

import './Index.less';

interface IndexProps {
    dispatch: any;
    goodsList: any;
}

interface IndexState {
}

class Index extends Taro.Component<IndexProps, IndexState> {
    config: Config = {
        navigationBarTitleText: '首页'
    }

    constructor(props: IndexProps) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        this.props.dispatch({ type: "Index/GetIndexList", payload: { pageIndex: 1 } });
    }

    public render(): JSX.Element {
        const { goodsList } = this.props;
        console.info(goodsList);
        return (
            <View className='home'>
                <Text>Hello Taro!</Text>
                <View>
                    {
                        goodsList && goodsList.map((item: Goods) => (
                            <GoodsItem
                                goods={item}
                                key={item.id}
                            />
                        ))
                    }
                </View>
            </View>
        );
    }
}

export default connect(({ Index }) => Index)(Index);
