import { setLayout } from "src/utils/route/route-utils";
import layouts from "src/layouts";

import HomeView from "src/modules/home/HomeView";
import HomeView_wh from "src/modules/home-wh/HomeView";

let specialModule: any[] = [];

if (process.env.REACT_APP_HOSPITAL_ID == "hj") {
  specialModule = [setLayout("/home", HomeView, layouts.MainLayout)];
} else if (process.env.REACT_APP_HOSPITAL_ID == "wh") {
  specialModule = [setLayout("/home", HomeView_wh, layouts.MainLayout)];
}

export { specialModule };
