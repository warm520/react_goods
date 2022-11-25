import React, { useState, useEffect } from 'react'
import './index.css'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, Popconfirm, Button } from 'antd'
import logo from './images/logo.png'
import menuList from '../../config/menuConfig'
import axios from 'axios'
import DateFormat from '../../utils/DateFormat'
const { Header, Content, Sider, Footer } = Layout

export default function HomePage() {
  const history = useNavigate()
  const { pathname } = useLocation()
  const defaultSelectedKey = ['/home']
  const [selectedKeys, setSelectedKeys] = useState(defaultSelectedKey)
  // 页面标题
  const [routerTitle, setRouterTitle] = useState('')
  // 天气信息
  const [weatherInfo, setWeatherInfo] = useState({})
  useEffect(() => {
    // 获取天气的函数
    const getWeatherInfo = async () => {
      const result = await axios.get(
        'https://restapi.amap.com/v3/weather/weatherInfo',
        {
          params: {
            city: '110101',
            key: '732cf3793a0529d26c882962316561fe'
          }
        }
      )
      // console.log(result)
      if (result.data.status === '1') {
        setWeatherInfo(result.data.lives[0])
      }
    }
    getWeatherInfo()
    getTitle()
  }, [weatherInfo, routerTitle])
  const handleClick = (val) => {
    const { key } = val
    console.log(key)
    setSelectedKeys([key])
    history(key)
  }
  const logOut = () => {
    history('/login')
    sessionStorage.removeItem('user_name')
    sessionStorage.removeItem('user_id')
  }
  // 获取标题的函数
  const getTitle = () => {
    let title
    menuList.map((item) => {
      if (item.key === pathname) {
        title = item.label
        return null
      } else if (item.children) {
        item.children.map((item) => {
          if (item.key === pathname) {
            title = item.label
            return null
          }
        })
      }
      setRouterTitle(title)
    })
  }
  return (
    <div style={{ height: '100%' }}>
      <Layout style={{ height: '100%' }}>
        <Sider style={{ color: '#fff' }}>
          <div className="leftNav">
            <img src={logo} alt="" />
            <h2>硅谷后台</h2>
          </div>
          <Menu
            items={menuList}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={defaultSelectedKey}
            selectedKeys={selectedKeys}
            onClick={(val) => {
              handleClick(val)
            }}
            selectable={true}
            className="menuList"
          />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: '#fff',
              height: '80px',
              width: '100%',
              paddingInline: '0'
            }}
          >
            <div className="header">
              <div className="headerTop">
                <span>欢迎，{sessionStorage.getItem('user_name')}</span>
                <Popconfirm
                  title="确认退出吗?"
                  cancelText="取消"
                  okText="确定"
                  onConfirm={logOut}
                >
                  <Button>退出</Button>
                </Popconfirm>
              </div>

              <div className="headerBottom">
                <div className="headerBottomLeft">
                  <span>{routerTitle}</span>
                </div>
                <div className="headerBottomRight">
                  <span>{DateFormat()}</span>
                  <span>{weatherInfo.city}</span>
                  <span>{weatherInfo.weather}</span>
                </div>
              </div>
            </div>
          </Header>
          <Content style={{height:'100%',backgroundColor:'#ededed'}}>
            <Outlet />
          </Content>
          <Footer style={{textAlign:'center',color:'#aaaaaa'}}>
          推荐使用谷歌浏览器， 可以获得更佳页面操作体验
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}
