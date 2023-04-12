import { AppRoute } from "../components/app-routes";
import { lazy } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import ErrorPage from "../pages/ErrorPage";

export const routesPaths = {
  base: "/",
  public: {
    home: "/home",
    about: "/about",
  },
};
export const appRoutes: AppRoute[] = [
  {
    exact: true,
    path: routesPaths.public.home,
    layout: BaseLayout,
    component: lazy(() => import("../pages/Homepage/")),
  },
  {
    exact: true,
    path: routesPaths.public.about,
    layout: BaseLayout,
    component: lazy(() => import("../pages/About")),
  },
  {
    exact: true,
    path: "*",
    layout: BaseLayout,
    component: ErrorPage,
  },
];
