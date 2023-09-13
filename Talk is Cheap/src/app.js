import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Offers from "./components/Offer";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
// import Groceries from "./components/Groceries";

const Groceries = lazy(() => import("./components/Groceries"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense>
            <Groceries />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
