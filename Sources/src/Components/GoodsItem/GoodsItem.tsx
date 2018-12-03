import Taro from '@tarojs/taro';

import { View, Image } from '@tarojs/components';

import './GoodsItem.less';

interface GoodsItemProps{
    goods: any;
}

interface GoodsItemState{

}

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
