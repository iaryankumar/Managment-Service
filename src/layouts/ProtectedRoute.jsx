import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const token = "hello"
    return token ? children: <Navigate to={'/auth'} replace />
}

export default ProtectedRoute
