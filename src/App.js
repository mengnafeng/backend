import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd'

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import Routes from './routes/index'

import store from './store/index'
moment.locale('zh-cn');

const App = () => (
  <div>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Provider {...store}>
          <Routes />
        </Provider>
      </Router>
    </ConfigProvider>
  </div>
)

export default App
