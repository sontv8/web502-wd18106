import React from 'react'
import HomePage from '../pages/Homepage'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="https://picsum.photos/100/50" alt="" />
                </div>
                <nav>
                    <ul>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Menu</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <img src="https://picsum.photos/1440/300" alt="" />
            </footer>
        </div>
    )
}

export default WebsiteLayout