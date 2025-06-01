import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
        </div>
    )
}


