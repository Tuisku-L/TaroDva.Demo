/*
 * @Author: Tuisku
 * @Date: 2018-12-03 13:47:28
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:50:11
 * @Description: 商品列表组件
 */

import Taro from '@tarojs/taro';

import { View, Image } from '@tarojs/components';

import './GoodsItem.less';

interface GoodsItemProps{
    goods: any;
}

interface GoodsItemState{

}

// 注意！不要在组件中使用connect，不要将组件和Model连接起来，组件所需要的网络请求均需提升到父页面去执行
// 即：父页面将网络请求的函数作为Props传递到子组件，子组件调用即可
// 所以直接在头顶上export整个类即可
export default class GoodsItem extends Taro.Component<GoodsItemProps,GoodsItemState>  {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    handleClickGoods = (goods: any): void => {
        Taro.showToast({
            title: `点击事件，你点击了商品：${goods.Name}，价格为：${goods.Price}。`,
            icon: 'none',
            mask: true,
        });
    }

    public render(): JSX.Element {
        const { goods } = this.props;
        return (
            <View className='goodsBox' onClick={this.handleClickGoods.bind(this, goods)}>
                <View className='content'>
                    <Image mode='aspectFill' src='http://mall.tyxin.cn/upload/store/6/product/show/thumb230_230/ps_1811061708115105451.jpg' />
                    <View className='name'>{goods.Name}</View>
                    <View className='price'>￥{goods.Price}.00</View>
                </View>
            </View>
        );
    }
}
