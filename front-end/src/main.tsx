import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, BrowserRouter
} from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import './App.css'
import SignUp from './pages/SignUp/SignUp.tsx'
// import Navbar from './components/navbar.jsx'

// const App = () => {
//     return (
//       <BrowserRouter>
//         <Navbar />
//       </BrowserRouter>
//     )
//   }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);