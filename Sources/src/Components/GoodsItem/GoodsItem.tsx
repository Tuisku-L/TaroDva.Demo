/*
 * @Author: Tuisku
 * @Date: 2018-12-03 13:47:28
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:50:11
 * @Description: 商品列表组件
 */

import Taro from '@tarojs/taro';

import { View } from '@tarojs/components';

import './GoodsItem.less';
import { Goods } from 'src/Entities/Core/Goods';

interface GoodsItemProps {
    goods: Goods;
}

export default class GoodsItem extends Taro.Component<GoodsItemProps, any>  {
    constructor(props: GoodsItemProps) {
        super(props);
        this.state = {
        };
    }

    handleClickGoods = (goods: Goods): void => {
        Taro.showToast({
            title: `点击事件，你点击了商品：${goods.name}，价格为：${goods.price}。`,
            icon: 'none',
            mask: true,
        });
    }

    public render(): JSX.Element {
        const { goods } = this.props;
        return (
            <View className='goodsBox' onClick={this.handleClickGoods.bind(this, goods)}>
                <View className='content'>
                    <View className='name'>{goods.name}</View>
                    <View className='price'>￥{goods.price}</View>
                </View>
            </View>
        );
    }
}
