import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Students from "./pages/Students"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import ProtectedRoute from "./layouts/ProtectedRoute"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        )
      ,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'students',
          element: <Students />,
          children: [
            { index: true, element: <Students /> },
          ]
        },
      ]
    },
    {
      path: '/auth',
      element: <Auth />
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
