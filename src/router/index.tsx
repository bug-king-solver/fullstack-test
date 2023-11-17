import { lazy } from "react";
import { BaseLayout } from "../components";
import { Outlet } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const ArticleDetail = lazy(() => import("../pages/ArticleDetail"));

const routes = () => {
  return {
    element: (
      <BaseLayout>
        {" "}
        <Outlet />{" "}
      </BaseLayout>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:articleId", element: <ArticleDetail /> },
    ],
  };
};

export default routes;
