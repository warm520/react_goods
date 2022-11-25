import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  AreaChartOutlined,
  SafetyCertificateOutlined,
  BarsOutlined,
  ToolOutlined
} from '@ant-design/icons'

const menuList = [
  {
    label: '首页', // 菜单标题名称
    key: '/home', // 对应的 path
    icon: <HomeOutlined />
  },
  {
    label: '商品',
    key: '/products',
    icon: <AppstoreOutlined />,
    children: [
      // 子菜单列表
      {
        label: '品类管理',
        key: '/category',
        icon:<BarsOutlined />
      },
      {
        label: '商品管理',
        key: '/product',
        icon:<ToolOutlined />
      }
    ]
  },
  {
    label: '用户管理',
    key: '/user',
    icon: <UserOutlined />
  },
  {
    label: '角色管理',
    key: '/role',
    icon: <SafetyCertificateOutlined />
  },
  {
    label: '图形图表',
    key: '/charts',
    icon: <AreaChartOutlined />,
    children: [
      {
        label: '柱形图',
        key: '/charts/bar'
      },
      {
        label: '折线图',
        key: '/charts/line'
      },
      {
        label: '饼图',
        key: '/charts/pie'
      }
    ]
  }
]

export default menuList
