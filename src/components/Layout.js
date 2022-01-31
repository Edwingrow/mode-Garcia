import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Loading from './Loading'

const Layout = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className='App'>
      <NavBar />
      <Outlet context={[setLoading]} />
      {loading ? <Loading /> : null}
    </div>
  )
}

export default Layout
