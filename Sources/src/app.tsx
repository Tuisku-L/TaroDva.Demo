import '@tarojs/async-await';
import Taro, { Config } from '@tarojs/taro';

import Index from './Views/Index';

import dva from './Utils/Dva';
import models from './Models/Index';
import { Provider } from '@tarojs/redux';

import './app.less'

// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Taro.Component {
  config: Config = {
    pages: [
      'Views/Index/Index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '天医星 - 项目框架',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'Views/Index/Index',
          text: '首页',
          iconPath: './Vender/Images/Icons/home.png',
          selectedIconPath: './Vender/Images/Icons/home-active.png'
        },
        {
          pagePath: 'Views/Index/Index',
          text: '订单',
          iconPath: './Vender/Images/Icons/cart.png',
          selectedIconPath: './Vender/Images/Icons/cart-active.png'
        },
        {
          pagePath: 'Views/Index/Index',
          text: '我的',
          iconPath: './Vender/Images/Icons/user.png',
          selectedIconPath: './Vender/Images/Icons/user-active.png'
        }
      ]
    }
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'))
