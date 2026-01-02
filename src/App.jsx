import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CurrentEmployeesPage } from "./pages/employee";
import { employeeLoader } from "./pages/employee/employeeLoader";
import { HomePage } from "./pages/home";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto flex max-w-[1440px] flex-1 flex-col p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    basename: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "current-employees",
        element: <CurrentEmployeesPage />,
        loader: employeeLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
