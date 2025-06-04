import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Students from "./pages/Students"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import ProtectedRoute from "./layouts/ProtectedRoute"
import Attendance from "./pages/Attendance"
import Assignment from "./pages/Assignment"
import Teachers from "./pages/Teachers"
import Exam from "./pages/Exam"
import Fees from "./pages/Fees"
import Message from "./pages/Message"
import StudentView from "./pages/StudentView"
import TeacherView from "./pages/TeacherView"
import Others from "./pages/Others"
import AddTeacher from "./pages/AddTeacher"
import AddStudent from "./pages/AddStudent"


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
        { path:'teacher/:username', element: <TeacherView /> },
        {
          path: 'students',
          children: [
            { index: true, element: <Students /> },
            { path:':username', element: <StudentView /> },
          ]
        },
        {
          path: 'teacher',
          children: [
            { index: true, element: <Teachers /> },
          ]
        },
        {
          path: 'attendance',
          children: [
            { index: true, element: <Attendance /> },
          ]
        },
        {
          path: 'assignment',
          children: [
            { index: true, element: <Assignment /> },
          ]
        },
        {
          path: 'exam',
          children: [
            { index: true, element: <Exam /> },
          ]
        },
        {
          path: 'fees',
          children: [
            { index: true, element: <Fees /> },
          ]
        },
        {
          path: 'notice',
          children: [
            { index: true, element: <Message /> },
          ]
        },
        {
          path: 'others',
          children: [
            { index: true, element: <Others /> },
          ]
        },
      ]
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/add/teacher',
      element: (
        <ProtectedRoute>
          <AddTeacher />
        </ProtectedRoute>
      )
    },
    {
      path: '/add/student',
      element: (
        <ProtectedRoute>
          <AddStudent />
        </ProtectedRoute>
      )
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
