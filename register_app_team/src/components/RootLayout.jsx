import React from 'react'
import ChildrenLayout from './ChildrenLayout'
import UserMainPage from '../pages/routes/user/UserMainPage'
import '../StyleComponent/index.css'

export default function RootLayout() {

  return (
    <div className='App'>
      <ChildrenLayout>
      <UserMainPage/>
      </ChildrenLayout>
    </div>
  )
}
