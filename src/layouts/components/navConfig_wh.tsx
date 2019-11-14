import React from "react";
import { appStore } from "src/stores";

export interface navConfigItem {
  name: string;
  path?: string;
  children?: navConfigItem[];
  hidden?: boolean;
  icon?: any;
  menuStyle?: React.CSSProperties;
}

export const navConfig: navConfigItem[] = [
  {
    name: "首页",
    path: "/home"
  },
  {
    name: "审核管理",
    path: "/auditsManagement"
  },
  // {
  //   name: '病区日志',
  //   path: '/wardLog',
  //   hidden: !appStore.isDev
  // },
  {
    name: "档案管理",
    path: "/nurseFile"
  },
  {
    name: "我的档案",
    path: "/selfNurseFile"
  },
  {
    name: "质量管理",
    children: [
      {
        name: "三级质控",
        path: "/qcThree",
        icon: require("../images/menu-icon/三级质控@2x.png")
      },
      {
        name: "二级质控",
        path: "/qcTwo",
        icon: require("../images/menu-icon/二级质控@2x.png")
      },
      {
        name: "一级质控",
        path: "/qcOne/nursingWorkPlainList",
        icon: require("../images/menu-icon/一级质控@2x.png"),
        hidden: !appStore.isDev
      },
      {
        name: "病区登记本",
        path: "/wardRegister",
        icon: require("../images/menu-icon/病区登记本@2x.png"),
        hidden: !appStore.isDev
      },
      {
        name: "查询统计",
        path: "/queryStatistics",
        icon: require("../images/menu-icon/查询统计@2x.png")
      },
      {
        name: "特殊时段查房",
        path: "/checkWard",
        icon: require("../images/menu-icon/护理查房@2x.png")
      }
    ]
  },
  {
    name: "通知公告",
    path: "/notice"
  },
  {
    name: "护理制度",
    path: "/nursingRulesNew"
  },
  {
    name: "病区管理",
    path: "/wardManagement"
  },
  {
    name: "排班管理",
    path: "/personnelManagement"
    // hidden: !appStore.isDev
  }
];
