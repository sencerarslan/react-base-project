import { AppRoute } from "../components/app-routes";
import { lazy } from "react";
import WideScreenLayout from "../components/layouts/WideScreenLayout";
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
    layout: WideScreenLayout,
    component: lazy(() => import("../pages/Homepage/")),
  },
  {
    exact: true,
    path: routesPaths.public.about,
    layout: WideScreenLayout,
    component: lazy(() => import("../pages/About")),
  },
  {
    exact: true,
    path: "*",
    layout: WideScreenLayout,
    component: ErrorPage,
  },
];
