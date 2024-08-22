import { lazy } from "react";
import Homepage  from "@/pages/homepage";
const Projects = lazy(() => import("../pages/projects"))
const Technologies = lazy(() => import("../pages/technologies"))
const About = lazy(() => import("../pages/about"))
const Admin = lazy(() => import("../pages/admin"))
const NotFound = lazy(() => import("../pages/notfound"))




export const appRoutes = [
    {
        path: "/",
        component: Homepage,
    },
    {
        path: "/projects",
        component: Projects,
    },
    {
        path: "/technologies",
        component: Technologies,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/admin",
        component: Admin,
    },
    {
        path: "*",
        component: NotFound,
    },
]