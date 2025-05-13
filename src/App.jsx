import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Heading from "./ui/Heading";
import Dashboard from "./features/dashboard/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import NewUsers from "./pages/Users";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // Amount of time cache's data will be valid
    },
  },
});

const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  {
    element: <AppLayout />,
    children: [
      { path: "dashboard", index: true, element: <Dashboard /> },
      { path: "bookings", element: <Bookings /> },
      { path: "cabins", element: <Cabins /> },
      { path: "settings", element: <Settings /> },
      { path: "newUsers", element: <NewUsers /> },
      { path: "account", element: <Account /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <RouterProvider router={router} />

      <Toaster position="top-center" gutter={12} containerStyle={{margin: "8px"}} toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-grey-0)",
          color: "var(--color-grey-700)"
        }
      }}/>

    </QueryClientProvider>
  );
}

export default App;
