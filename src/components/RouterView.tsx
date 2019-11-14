import * as React from 'react'
import { Redirect, Route, RouteComponentProps as RouteProps, Switch } from 'react-router-dom'

export interface RouteComponentProps<P = {}> extends RouteProps<P> {
  routes?: RouteItem[]
  payload?: any
}

export interface RouteComponentClass<P> extends React.ComponentClass<RouteComponentProps<P>> {}

export interface RouteItem {
  path: string
  exact?: boolean
  // component?: RouteComponentClass<any>
  component?: React.ComponentType<RouteComponentProps<any>>
  redirect?: string
  routes?: RouteItem[]
  payload?: any
}

export interface Props {
  switched?: boolean
  routes?: RouteItem[]
}

export interface State {}

export default class RouterView extends React.Component<Props, State> {
  public render () {
    const { switched = true, routes } = this.props

    if (!routes || !routes.length) {
      return null
    }

    const Wrapper = switched ? Switch : React.Fragment

    return (
      <Wrapper>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) =>
              route.redirect && route.path === props.location.pathname ? (
                <Redirect to={route.redirect} />
              ) : route.component ? (
                <route.component {...props} routes={route.routes} payload={route.payload} />
              ) : null
            }
          />
        ))}
      </Wrapper>
    )
  }
}
