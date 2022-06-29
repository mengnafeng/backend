// import React from "react";
// import Home from "./pages/home/home";
// import Mine from "./pages/mine/mine";
// import List from "./pages/list/list";
// import Login from "./pages/login/login";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Switch>
//           <Route exact path="/home" component={Home}></Route>
//           <Route path="/mine" component={Mine}></Route>
//           <Route path="/list" component={List}></Route>
//           <Route path="/login" component={Login}></Route>
//         </Switch>
//       </Router>
//     </div>
//   )
// }

// export default App;

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
