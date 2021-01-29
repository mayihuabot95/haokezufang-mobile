// 按需导入需要使用的 Button 组件
// import { Button } from 'antd-mobile'
// 导入路由相关的组件们
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 导入 CityList 和 Home 两个页面组件
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    // ***注意：要使用 <Router> 组件将整个页面的根组件包裹起来，才可以使用 <Route>
    <Router>
      <div className="App">
        {/* 项目根组件
        <Button>按钮</Button> */}
        {/* 配置导航菜单(路由入口) */}
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/citylist">城市列表页</Link></li>
          </ul>
        {/* 配置路由出口 */}
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
      </div>
    </Router>
  );
}

export default App;
