import React from 'react'
import './index.scss'
import SideBar from '../components/sidebar/index'
import TopNav from '../components/topnav/index'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <SideBar />
      <div className="main">
        <div className="main__content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout