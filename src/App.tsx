import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./Pages/Main"
import Country from "./Pages/Country";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },

  {
    path: '/country',
    element: <Country />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
