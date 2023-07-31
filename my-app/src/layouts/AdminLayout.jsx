import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <aside>
                <ul>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Menu</a></li>
                </ul>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout