import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
// import { RouteComponentProps } from 'react-router'

import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  name: string
  link?: string
}

export interface Props {
  data: BreadcrumbItem[]
}

export default function BaseBreadcrumb(props: Props) {
  useEffect(() => {})
  // const handleClick = (e: any) => {
  //   console.log('click ', e) 排班管理 排班人员设置
  // }
  return (
    <Wrapper>
      <BreadcrumbContainer>
        <Breadcrumb>
          {props && props.data ? (
            props.data.map((item) => (
              <Breadcrumb.Item key={item.name}>
                {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
              </Breadcrumb.Item>
            ))
          ) : (
            <span>-</span>
          )}
        </Breadcrumb>
      </BreadcrumbContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const BreadcrumbContainer = styled.div`
  position: relative;
  padding: 15px 20px 5px;
`
