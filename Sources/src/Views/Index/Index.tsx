/*
 * @Author: Tuisku
 * @Date: 2018-12-03 06:52:43
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:26:40
 * @Description: 首页 - 页面文件
 */

import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';

import { View, Text, Swiper, SwiperItem, Image, Icon, Input } from '@tarojs/components';

import GoodsItem from '../../Components/GoodsItem/GoodsItem';

import './Index.less';

// 预定义此页面的Props（强类型检查）
interface IndexProps {
    dispatch: any;
    goodsList: any;
}

// 预定义此页面的State  => 可忽略，但是建议提前定义，便于类型检查和代码提示
interface IndexState {
    searchKeywords: string;
}

// 如果页面State未预定义，不使用强类型限制State，则写为：
// class Index extends Taro.Component<IndexProps, any>
class Index extends Taro.Component<IndexProps, IndexState> {
    config: Config = {
        navigationBarTitleText: '首页'
    }

    constructor(props: any) {
        super(props);
        // 若使用强类型预定义了页面State，则必须全部出现在构造函数的state定义中
        this.state = {
            searchKeywords: ""
        };
    }

    // componentDidMount函数适合在页面加载时进行后端请求加载需要展示的数据
    componentDidMount = () => {
        // dispatch必须使用dva并且使用connect函数连接了model和页面之后才能使用，否则会是undefined
        this.props.dispatch({ type: "Index/GetIndexList", payload: { pageIndex: 1 } });
    }

    // 参数列表可以定义参数类型，但是也可以使用any表示接受任何类型的参数。不过一般推荐常见数据类型均严格定义（例如boolean、number、string、Array等）
    // 参数列表后面的“: void”代表此函数为无返回值的函数，若函数有返回值，则定义为返回值类型，例如“: string”代表函数最终return一个string类型
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

    // 页面的入口函数 render()，每个页面或组件均需要此函数return出去一个JSX.Element
    public render(): JSX.Element {
        return (
            // JSX中只允许存在一个顶级标签
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
                        // 可以在JSX中使用花括号进行部分js操作，比如常见的循环输出等。
                        // 如下所示，使用Props或State中的元素时，首先请判断元素是否存在（即使用&&运算符）
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

// 最终将页面export出去，若需要连接model则使用connect函数进行包装
export default connect(({ Index }) => Index)(Index);
