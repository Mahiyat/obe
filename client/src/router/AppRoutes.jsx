import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import ResultDashboard from "../components/ResultDashboard";
import CourseInfo from "../components/CourseInfo";

export default function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <ResultDashboard /> },
        { path: "course-info", element: <CourseInfo /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
