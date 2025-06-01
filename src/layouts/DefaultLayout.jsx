import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <div>
            <header></header>
            <main className='container'>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout
