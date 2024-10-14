import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./Pages/Main"
import Country from "./Pages/Country";
import { CountriesProvider } from "./Provider/Countries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
