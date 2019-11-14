import styled from 'styled-components'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ReactComponent as TQBB } from '../images/BQBB.svg'
import { ReactComponent as HSDA } from '../images/HSDA.svg'
import { ReactComponent as HSPB } from '../images/HSPB.svg'
import { ReactComponent as MGZB } from '../images/MGZB.svg'
import { ReactComponent as BLSJ } from '../images/BLSJ.svg'
import { ReactComponent as XYB } from '../images/XYB.svg'
import { ReactComponent as TJCX } from '../images/TJCX.svg'
import { appStore, authStore } from 'src/stores'

export default observer(function QuickButton() {
  let blockList = [
    // {
    //   title: '病区白板',
    //   icon: <TQBB />,
    //   background: '#00C0EF'
    // },
    {
      title: '护士档案',
      icon: <HSDA />,
      background: '#00A65A',
      path: '/nurseFile/onTheJob'
    },
    {
      title: '质量管理',
      icon: <HSPB />,
      background: '#F39C12',
      path: '/quality/qualityControlRecord'
    },
    {
      title: '通知公告',
      icon: <MGZB />,
      background: '#F56954',
      path: '/notice'
    },
    {
      title: '护理制度',
      icon: <BLSJ />,
      background: '#337AB7',
      path: '/nursingRulesNew'
    },
    {
      title: '病区管理',
      icon: <TJCX />,
      background: '#33B7AA',
      path: '/wardManagement'
    }
  ]

  let blockListSelf = [
    {
      title: '我的档案',
      icon: <HSDA />,
      background: '#00A65A',
      path: '/selfNurseFile'
    },
    {
      title: '通知公告',
      icon: <MGZB />,
      background: '#F56954',
      path: '/notice'
    },
    {
      title: '护理制度',
      icon: <BLSJ />,
      background: '#337AB7',
      path: '/nursingRules'
    },
    {
      title: '病区管理',
      icon: <TJCX />,
      background: '#33B7AA',
      path: '/wardManagement'
    }
  ]
  //封装函数
  const renderSubMenu = () => {
    return (authStore.isRoleManage ? blockList : blockListSelf).map((item: any, index: any, arr: any) => {
      return (
        <QuickMenu
          key={index}
          className='button'
          style={{ background: `${item.background}` }}
          onClick={() => appStore.history.push(item.path)}
          isLast={arr.length - 1 == index}
        >
          <WorldTitle>{item.title}</WorldTitle>
          <ReactSvg>{item.icon}</ReactSvg>
          <Btn>
            <Content>
              <Span className='opacityChange1'>进入查看</Span>
              <I className='opacityChange2'>
                <XYB />
              </I>
            </Content>
          </Btn>
        </QuickMenu>
      )
    })
  }

  return <Wrapper>{renderSubMenu()}</Wrapper>
})

const QuickMenu = styled.div<{ isLast: boolean }>`
  position: relative;
  flex: 1;
  height: 100%;
  background: yellow;
  margin-right: ${(p) => (p.isLast ? '0' : '25px')};
  &:hover {
    cursor: pointer;
  }
  &:hover .opacityChange1 {
    opacity: 1;
  }
  &:hover .opacityChange2 {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  height: 80px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;

  .button:nth-child(6) {
    margin-right: 0 !important;
  }
  .cIekGw:nth-child(3) .icon {
    top: 18 !important;
  }
`
const WorldTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 27px;
  font-size: 21px;
  font-weight: 600;
  color: rgba(249, 249, 249, 1);
  line-height: 27px;
  z-index: 5;
`
const ReactSvg = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
const Btn = styled.div`
  width: 100%;
  height: 25px;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  bottom: 0;
`
const Content = styled.div`
  width: 75px;
  height: 18px;
  margin: auto;
  margin-top: 1px;
`
const Span = styled.span`
  display: inline-block;
  color: rgba(255, 255, 255, 1);
  line-height: 18px;
  opacity: 0.6;
  vertical-align: middle;
`
const I = styled.span`
  display: inline-block;
  opacity: 0.6;
  margin-left: 5px;
  vertical-align: middle;
  margin-top: 3px;
`
