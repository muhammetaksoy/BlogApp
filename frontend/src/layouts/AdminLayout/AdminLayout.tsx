import React from 'react'
import {Outlet} from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <nav>
            <ul>Dashoard</ul>
            <ul>Bloglar</ul>
            <ul>Kullanıcılar</ul>
            <ul>Yorumlar</ul>
        </nav>

        <Outlet/>
    </div>
  )
}

export default AdminLayout