import { RouteItem } from 'src/components/RouterView'

/**
 * 路由方法
 */

interface payload {
  style: React.CSSProperties
  [p: string]: any
}

export function setLayout(path: string, view: any, layout?: any, data?: payload | any): RouteItem {
  let router: RouteItem
  if (layout) {
    router = {
      path: path,
      component: layout,
      routes: [
        {
          path: path,
          component: view
        }
      ]
    }
  } else {
    router = {
      path: path,
      component: view
    }
  }
  if (data) router.payload = data
  return router
}

/**
 * 路由方法2
 */
export function setRouteItem() {
  //
}
