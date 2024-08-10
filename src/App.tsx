import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./ui/LoginPage"
import { TodosPage , loader as todoLoader} from "./todos/TodosPage"
import { AppLayout } from "./ui/AppLayout"

const router = createBrowserRouter([

  {element: <AppLayout></AppLayout>, children: [
    {path: "/", element: <LoginPage></LoginPage>},
    {path: "/todos", element: <TodosPage></TodosPage>, loader: todoLoader}
  ]},
])


function App() {

  return (
    <>
      
      <RouterProvider router={router}/>

    </>
  )
}

export default App
