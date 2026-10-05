import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TaskCreatePage from './page/TaskCreatePage'
import TaskListPage from './page/TaskListPage'
import { Routes, Route } from "react-router-dom"

//URLと画面の対応をする
function App() {
  return (
    <Routes>
      <Route path = "/" element = {<TaskListPage />}/>
    </Routes>
  )
}


export default App
