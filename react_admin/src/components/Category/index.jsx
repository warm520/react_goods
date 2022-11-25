import React from 'react'
import { Card, Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
export default function Category() {
  return (
    <div style={{ height: '100%' }}>
      <Card
        style={{ margin: '20px' }}
        title="一级分类列表"
        extra={
          <Button
            icon={<PlusOutlined />}
            style={{ backgroundColor: '#1da57a',color:'#fff' }}
          >
            添加
          </Button>
        }
      >
        <Table />
      </Card>
    </div>
  )
}
