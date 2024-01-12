import React from 'react'
import NavBar from './์NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ChildrenLayout from './ChildrenLayout'
import UserMainPage from '../routes/UserMainPage'
import '../../StyleComponent/index.css'

export default function RootLayout() {

  return (
    <div className='App'>
      <ChildrenLayout>
      <Outlet/>
      </ChildrenLayout>
    </div>
  )
}
