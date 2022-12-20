import { useRoutes } from 'react-router-dom'

import React from 'react'
import Home from '../pages/Home/Home'
import NewPost from '../pages/NewPost/NewPost'

export const MainRoutes = () => {
    return useRoutes([ 
        {path: '/', element: <Home />},
        {path: '/new', element: <NewPost />},
    ])
}