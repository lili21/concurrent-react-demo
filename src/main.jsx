import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import InputDemo from "./routes/input";
import InputConcurrent from "./routes/input-concurrent";
import TabDemo from "./routes/tab";
import TabConcurrent from "./routes/tab-concurrent";
import Tearing from "./routes/tearing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "input",
        element: <InputDemo />,
      },
      {
        path: "input-concurrent",
        element: <InputConcurrent />,
      },
      {
        path: "tab",
        element: <TabDemo />,
      },
      {
        path: "tab-concurrent",
        element: <TabConcurrent />,
      },
      {
        path: "tearing",
        element: <Tearing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
