import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestoMenu from "./components/RestoMenu";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Head />
      <Outlet />
    </>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestoMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
