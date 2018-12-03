import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';

import { View, Text, Swiper, SwiperItem, Image, Icon, Input } from '@tarojs/components';

import GoodsItem from '../../Components/GoodsItem/GoodsItem';

import './Index.less';

interface IndexProps {
    dispatch: any;
    goodsList: any;
}

interface IndexState {
    searchKeywords: string;
}

class Index extends Taro.Component<IndexProps, IndexState> {
    config: Config = {
        navigationBarTitleText: '首页'
    }

    constructor(props: any) {
        super(props);
        this.state = {
            searchKeywords: ""
        };
    }

    componentDidMount = () => {
        this.props.dispatch({ type: "Index/GetIndexList", payload: { pageIndex: 1 } });
    }

    handleSearchChange = (e: any): void => {
        this.setState({
            searchKeywords: e.target.value
        });
    }

    handleOnSearch = (): void => {
        Taro.showToast({
            title: `搜索事件，你搜索的关键字为${this.state.searchKeywords}`,
            icon: 'none',
            mask: true,
        });
    }

    public render(): JSX.Element {
        return (
            <View className='home'>
                <Swiper
                    className='swiper'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    autoplay>
                    <SwiperItem>
                        <Image
                            style='height: 150px; width: 100%'
                            src='http://mall.tyxin.cn/upload/adv/ad_1811051123204606417.jpg'
                        />
                    </SwiperItem>
                    <SwiperItem>
                        <Image
                            style='height: 150px; width: 100%'
                            src='http://mall.tyxin.cn/upload/adv/ad_1811051032159525043.png'
                        />
                    </SwiperItem>
                </Swiper>
                <View className='searchBox'>
                    <Input
                        type='text'
                        placeholder='搜索...'
                        confirmType='search'
                        value={this.state.searchKeywords}
                        onInput={this.handleSearchChange}
                    />
                    <Icon
                        type='search'
                        size='28'
                        onClick={this.handleOnSearch}
                    />
                </View>
                <View className='indexAction'>
                    <View className='actionBox'>
                        <View className='actionContent'>
                            <Text>点餐</Text>
                        </View>
                    </View>
                    <View className='actionBox'>
                        <View className='actionContent'>
                            <Text>商城</Text>
                        </View>
                    </View>
                    <View className='actionBox'>
                        <View className='actionContent'>
                            <Text>当面付</Text>
                        </View>
                    </View>
                </View>
                <View className='indexInfo'>
                    <View className='left'>
                        <View className='box'>
                            <Text>药膳公司文化介绍</Text>
                        </View>
                    </View>
                    <View className='right'>
                        <View className='box'>
                            <Text>药膳文化介绍</Text>
                        </View>
                        <View className='box'>
                            <Text>商务合作</Text>
                        </View>
                    </View>
                </View>
                <View style='text-align: center'>
                    热售产品
                </View>
                <View className='goodsList'>
                    {
                        this.props.goodsList && this.props.goodsList.map((item, index) => (
                            <GoodsItem
                                goods={item}
                                key={index}
                            />
                        ))
                    }
                </View>
            </View>
        );
    }
}

export default connect(({ Index }) => Index)(Index);
