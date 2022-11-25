import React, { Suspense, Lazy, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// 首页
// const HomePage = lazy(()=>import('./components/HomePage'))
import Login from './components/Login'
import HomePage from './components/HomePage'
import Home from './components/Home/index'
import Category from './components/Category'
import Product from './components/Product'
import User from './components/User'
import Role from './components/Role'
import AuthRoute from './utils/AuthRoute'
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />}>
          <Route
            path="/home"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route
            path="/product"
            element={
              <AuthRoute>
                <Product />
              </AuthRoute>
            }
          />
          <Route
            path="/category"
            element={
              <AuthRoute>
                <Category />
              </AuthRoute>
            }
          />
          <Route
            path="/user"
            element={
              <AuthRoute>
                <User />
              </AuthRoute>
            }
          />
          <Route
            path="/role"
            element={
              <AuthRoute>
                <Role />
              </AuthRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
