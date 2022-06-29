import React from 'react'
import { Route } from 'react-router-dom'

const RestrictRoute = ({ component: Component, path }) => {

  return (
    <Route
      path={path}
      render={(props) => (
        <Component {...props} />
      )}
    />
  )
}

export default RestrictRoute
