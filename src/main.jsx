import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import HomePage from "@pages/HomePage";
import MovieDetail from "@pages/MovieDetail";
import TVShowDetail from "@pages/TVShowDetail";
import ModalProvider from "@context/ModalProvider";
import PeoplePage from "@pages/PeoplePage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>,
  // {/* <App /> */}
  // </StrictMode>,
);
