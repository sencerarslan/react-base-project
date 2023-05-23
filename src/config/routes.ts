import { AppRoute } from "../components/app-routes";
import { lazy } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import ErrorPage from "../pages/ErrorPage";

export const routesPaths = {
  base: "/",
  about: "/about",
  public: {
    // detail: "/detail",
  },
};
export const appRoutes: AppRoute[] = [
  {
    exact: true,
    path: routesPaths.base,
    layout: BaseLayout,
    component: lazy(() => import("../pages/Homepage")),
  },
  {
    exact: true,
    path: routesPaths.about,
    layout: BaseLayout,
    component: lazy(() => import("../pages/Homepage")),
  },
  // {
  //   exact: true,
  //   path: `${routesPaths.public.detail}/:id`,
  //   layout: BaseLayout,
  //   component: lazy(() => import("../pages/Detail")),
  // },
  {
    exact: true,
    path: "*",
    layout: BaseLayout,
    component: ErrorPage,
  },
];
