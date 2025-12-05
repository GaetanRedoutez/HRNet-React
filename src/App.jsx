import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CurrentEmployeesPage } from "./pages/employee";
import { HomePage } from "./pages/home";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="max-w-[1440px] mx-auto flex flex-1 flex-col p-4">
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
