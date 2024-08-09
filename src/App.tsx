import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./ui/LoginPage"
import { TodosPage } from "./todos/TodosPage"

const router = createBrowserRouter([
  {path: "/", element: <LoginPage></LoginPage>},
  {path: "/todos", element: <TodosPage></TodosPage>}
])


function App() {

  return (
    <>
      
      <RouterProvider router={router}/>

    </>
  )
}

export default App
