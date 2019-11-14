import styled from 'styled-components'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { observer } from 'mobx-react-lite'
import { ReactComponent as SY } from '../images/首页.svg'
import { ReactComponent as SHGL } from '../images/审核管理.svg'
import { ReactComponent as HSPB } from '../images/护士排班.svg'
import { ReactComponent as HSDA } from '../images/护士档案.svg'
import { ReactComponent as BLSJ } from '../images/不良事件.svg'
import { ReactComponent as HLJX } from '../images/护理绩效.svg'
import { ReactComponent as PXKH } from '../images/培训考核.svg'
import { ReactComponent as MGZB } from '../images/敏感指标.svg'
import { ReactComponent as TJCX } from '../images/统计查询.svg'
import { ReactComponent as TZGG } from '../images/通知公告.svg'
import { ReactComponent as WLPT } from '../images/物流平台.svg'
import { ReactComponent as XTSZ } from '../images/系统设置.svg'
import { Place } from 'src/components/common'
import { authStore, appStore } from 'src/stores'
import service from 'src/services/api'

export interface Props extends RouteComponentProps {}

const navListWH: any = [
  {
    name: '首页',
    // icon: <SY />,
    path: '/home'
  },
  {
    name: '审核管理',
    icon: <SHGL />,
    path: '/auditsManagement'
  },
  // {
  //   name: '护士排班',
  //   // icon: <HSPB />,
  //   path: '/scheduleHome'
  // },
  {
    name: '档案管理',
    icon: <HSDA />,
    path: '/nurseFile'
  },
  {
    name: '我的档案',
    icon: <HSDA />,
    path: '/selfNurseFile'
  },
  // {
  //   name: '不良事件',
  //   icon: <BLSJ />,
  //   path: '/badEventsNewList'
  // },
  {
    name: '质量管理',
    icon: <BLSJ />,
    path: '/quality'
  },
  // {
  //   name: '护理绩效',
  //   icon: <HLJX />,
  //   path: '/nursingPerformance'
  // },
  // {
  //   name: '继续教育',
  //   icon: <PXKH />,
  //   path: '/continuingEdu'
  //   // trainingExamination
  // },
  // {
  //   name: '敏感指标',
  //   icon: <MGZB />,
  //   path: '/indicator'
  // },
  // {
  //   name: '统计查询',
  //   icon: <TJCX />,
  //   path: '/statistic'
  // },
  {
    name: '通知公告',
    icon: <TZGG />,
    path: '/notice'
    // hidden: !appStore.isDev
  },
  // {
  //   name: '物流平台',
  //   icon: <WLPT />,
  //   path: '/Lms'
  // },
  {
    name: '护理制度',
    icon: <HSDA />,
    path: '/nursingRulesNew'
  },
  {
    name: '病区管理',
    icon: <XTSZ />,
    path: '/wardManagement'
  },
  {
    name: '护理人员管理',
    icon: <XTSZ />,
    path: '/personnelManagement'
  }
]

const navListWHSelft: any = [
  {
    name: '首页',
    path: '/home'
  },
  {
    name: '我的档案',
    icon: <HSDA />,
    path: '/selfNurseFile'
  },

  {
    name: '通知公告',
    icon: <TZGG />,
    path: '/notice'
  },
  {
    name: '护理制度',
    icon: <HSDA />,
    path: '/nursingRulesNew'
  },
  {
    name: '病区管理',
    icon: <XTSZ />,
    path: '/wardManagement'
  }
]
const navList: any = [
  {
    name: '首页',
    // icon: <SY />,
    path: '/home'
  },
  {
    name: '审核管理',
    icon: <SHGL />,
    path: '/auditsManagement'
  },
  // {
  //   name: '护士排班',
  //   // icon: <HSPB />,
  //   path: '/scheduleHome'
  // },
  {
    name: '档案管理',
    icon: <HSDA />,
    path: '/nurseFile'
  },
  {
    name: '不良事件',
    icon: <BLSJ />,
    path: '/badEventsNewList'
  },
  {
    name: '不良事件分析报告',
    icon: <BLSJ />,
    path: '/badEvents/alanysis/1/1'
  },
  {
    name: '质量管理',
    icon: <BLSJ />,
    path: '/quality'
  },
  // {
  //   name: '护理绩效',
  //   icon: <HLJX />,
  //   path: '/nursingPerformance'
  // },
  // {
  //   name: '继续教育',
  //   icon: <PXKH />,
  //   path: '/continuingEdu'
  //   // trainingExamination
  // },
  {
    name: '敏感指标',
    icon: <MGZB />,
    path: '/indicator'
  },
  {
    name: '统计查询',
    icon: <TJCX />,
    path: '/statistic'
  },
  {
    name: '通知公告',
    icon: <TZGG />,
    path: '/notice'
    // hidden: !appStore.isDev
  },
  // {
  //   name: '物流平台',
  //   icon: <WLPT />,
  //   path: '/Lms'
  // },
  {
    name: '护理制度',
    icon: <HSDA />,
    path: '/nursingRulesNew'
  },
  {
    name: '系统设置',
    icon: <XTSZ />,
    path: '/setting'
  },
  {
    name: '护理人员管理',
    icon: <XTSZ />,
    path: '/personnelManagement'
  }
]

export default observer(function NavBar(props: Props) {
  const toNavLink = (path: string) => {
    return () => props.history.push(path)
  }
  let { location } = props
  return (
    <Wrapper className='NavBar'>
      <LogoCon>
        {appStore.HOSPITAL_ID == 'wh' ? (
          <React.Fragment>
            <img src={require('../images/武汉logo.png')} alt='' className='logo' style={{ height: 30 }} />
            <img src={require('../images/护理管理系统.png')} alt='' className='name' style={{ paddingRight: 30 }} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img src={require('../images/logo-white.png')} alt='' className='logo' />
            <img src={require('../images/宸瑞护理管理系统.png')} alt='' className='name' />
          </React.Fragment>
        )}
      </LogoCon>
      {(appStore.HOSPITAL_ID == 'wh'
        ? authStore.user && authStore.user.roleManage == '1'
          ? navListWH
          : navListWHSelft
        : navList
      ).map(
        (item: any) =>
          !item.hidden && (
            <NavItem
              onClick={toNavLink(item.path)}
              active={item.path !== '' && location.pathname.indexOf(item.path) !== -1}
              key={item.name}
            >
              {/* {item.icon} */}
              {/* <ReactSVG src={item.icon} svgClassName='nav-icon' /> */}
              <div className='nav-name'>{item.name}</div>
            </NavItem>
          )
      )}
      <Place />
      <RightCon>
        {authStore.user && authStore.user.nearImageUrl && (
          <img src={authStore.user.nearImageUrl} alt='' className='headImg' />
        )}
        <span className='name'>{authStore.user && authStore.user.empName}</span>
        <span className='line'>|</span>
        <span className='logout' onClick={service.authApiService.logout}>
          退出
        </span>
      </RightCon>
    </Wrapper>
  )
})
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 50px;
  background: ${(p) => p.theme.$mtc};
  position: relative;
  padding-bottom: 2px;
  z-index: 2;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 2px;
    background: #fff;
  }
`
const LogoCon = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    height: 26px;
    margin-right: 10px;
  }
  .name {
    height: 16px;
  }
`

const NavItem = styled.div<{ active?: boolean }>`
  height: 50px;
  min-width: 40px;
  display: flex;
  padding: 0 12px 0 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  background: ${(p) => p.active && p.theme.$mcc};
  color: #fff;
  svg {
    width: 16px;
    height: 16px;
    /* margin-top: 6px; */
    margin-right: 2px;
    path {
      /* fill: ${(p) => (p.active ? '#fff' : '#747474')}; */
    }
    title {
      display: none;
    }
  }
`

const RightCon = styled.div`
  font-size: 13px;
  color: #fff;
  margin-right: 15px;
  span {
    height: 50px;
    line-height: 50px;
  }
  .line {
    padding: 0 8px;
  }
  .logout {
    width: 30px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
  .headImg {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
`
