import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./ui/LoginPage"
import { TodosPage } from "./todos/TodosPage"
import { AppLayout } from "./ui/AppLayout"
import { ErrorPage } from "./ui/ErrorPage"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  
  {element: <AppLayout></AppLayout>, errorElement: <ErrorPage/> ,children: [
    {path: "/", element: <LoginPage></LoginPage>},
    {path: "/todos/:userId", element: <TodosPage></TodosPage>},

  ]},
])


function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router}/>
      
        <ReactQueryDevtools initialIsOpen={false}/>

      </QueryClientProvider>
    </>
  )
}

export default App
