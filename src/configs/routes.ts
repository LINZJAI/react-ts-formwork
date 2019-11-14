import React, { lazy } from "react";
// import ViewHome from '../views/ViewHome'
// import ViewLogin from '../views/ViewLogin'
// import ViewUsers from '../views/ViewUsers'
import { RouteItem } from "../components/RouterView";
import LoginView from "src/modules/login/LoginView";
import { setLayout } from "src/utils/route/route-utils";
import layouts from "src/layouts";

const demo = lazy(() => import("src/demo"));

import { specialModule } from "./routerConfig/specialModule";
// import ScheduleView from 'src/modules/schedule/views/ScheduleView'

const routes: RouteItem[] = [
  setLayout("/demo", demo),
  setLayout("/login", LoginView),
  {
    path: "/",
    redirect: "/home"
  }
];

export default routes;
