import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./ui/LoginPage"
import { TodosPage , loader as todoLoader} from "./todos/TodosPage"
import { AppLayout } from "./ui/AppLayout"
import { AuthProvider } from "./Context/AuthContext"
import { ErrorPage } from "./ui/ErrorPage"

const router = createBrowserRouter([

  {element: <AppLayout></AppLayout>, errorElement: <ErrorPage/> ,children: [
    {path: "/", element: <LoginPage></LoginPage>},
    {path: "/todos", element: <TodosPage></TodosPage>, loader: todoLoader}
  ]},
])


function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>

    </>
  )
}

export default App
