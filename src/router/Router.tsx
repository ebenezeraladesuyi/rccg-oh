/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import ContactLayout from "../layout/ContactLayout";
import Contact from "../pages/contact/Contact";
// import HomeComp from "../pages/home/HomeComp";


const HomeComp = lazy(() => import("../pages/home/HomeComp"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
])
 