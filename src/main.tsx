import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import IsLoading from './pages/isLoading/IsLoading.tsx'
import { RouterProvider } from 'react-router-dom'
import { element } from './router/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
      <Suspense fallback={<IsLoading />}>
        <RouterProvider router={element} />
      </Suspense>
  </React.StrictMode>,
)
