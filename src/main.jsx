import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import MainComponet from './components/MainComponet.jsx'
// import HomePageComponent from './components/HomePageComponent.jsx'

// const route = createBrowserRoute([
//   {
//     path: '/',
//     element: <MainComponet />,
//     children:[
//       {
//         path: '/',
//         element: <App />
//       },
//       {
//         path: '/about',
//         element: <HomePageComponent />
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
  
)
