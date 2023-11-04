import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import ResultDashboard from "../components/ResultDashboard";
import CourseInfo from "../components/CourseInfo";
import TutorialMarks from "../components/TutorialMarks";
import ResultStatistics from "../components/ResultStatistics";
import SingleCourseGraph from "../components/SingleCourseGraph";

export default function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <ResultDashboard /> },
        {
          path: "course-info",
          element: <CourseInfo />,
        },
        { path: "tutorial-marks", element: <TutorialMarks authed={true} /> },
        {
          path: "result-statistics",
          element: <ResultStatistics />,
          // children: [
          //   { path: "single-course-graph", element: <SingleCourseGraph /> },
          // ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
