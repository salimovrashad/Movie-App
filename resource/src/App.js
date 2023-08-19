import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Review from './pages/Review'
import Admin from './pages/admin/Admin'
import Login from './pages/Login'
import AddMovie from './pages/admin/update/AddMovie'
import EditMovie from './pages/admin/update/EditMovie'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/a98db973kwl8xp1lz94k' element={<Admin />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin/add' element={<AddMovie />}></Route>
        <Route path='/admin/edit/:id' element={<EditMovie />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App