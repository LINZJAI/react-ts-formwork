import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { Select, Button } from 'antd'
import service from 'src/services/api'
import DeptSelect from 'src/components/DeptSelect'
// import { any } from 'prop-types'
import emitter from 'src/libs/ev'
import { authStore } from 'src/stores'
const Option = Select.Option

function handleChange(value: any) {}

export default function SelectCommon() {
  const [officeList, setOfficeList] = useState([])
  // useEffect(() => {
  //   //
  // })

  // function getDepartmentName () {
  //   service.homeDataApiServices.getListDepartment().then((res) => {
  //     if (res && res.data) {
  //       let listDepartment = res.data.deptList
  //       if (!listDepartment) {
  //         // 获取后的科室相关数据
  //         listDepartment = []
  //       }
  //       return listDepartment.map((item: any) => (
  //         <Option key={item.name.toString()} value={item.name}>
  //           {item.name}
  //         </Option>
  //       ))
  //     }
  //   })
  // }
  const serchClick = () => {
    emitter.emit('首页查询')
  }
  return (
    <div>
      <SelectCon>
        <span className='label'>科室：</span>
        <DeptSelect onChange={handleChange} />
        {/* 暂时下面去掉这两个按钮 */}
        <Button style={{ marginLeft: 20, marginRight: 10 }} onClick={serchClick}>
          查询
        </Button>
        <Button>刷新</Button>
      </SelectCon>
    </div>
  )
}

const SelectCon = styled.div`
  padding: 0 0 10px;
  display: flex;
  align-items: center;
`
