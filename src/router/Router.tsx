/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import ContactLayout from "../layout/ContactLayout";
import Contact from "../pages/contact/Contact";
import GalleryLayout from "../layout/GalleryLayout";
import AllBlogLayout from "../layout/AllBlogLayout";
import FirstTimerLayout from "../layout/FirstTimerLayout";
import AboutLayout from "../layout/AboutLayout";
import PaymentLayout from "../layout/PaymentLayout";
import CsrLayout from "../layout/CsrLayout";
import BookingsLayout from "../layout/BookingsLayout";

const HomeComp = lazy(() => import("../pages/home/HomeComp"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const AllBlogs = lazy(() => import("../pages/allBlog/AllBlogs"));
const OneBlog = lazy(() => import("../pages/oneBlog/OneBlog"));
const FirstTimer = lazy(() => import("../pages/firstTimer/FirstTimer"));
const AboutComp = lazy(() => import("../pages/about/AboutComp"));
const Payment = lazy(() => import("../pages/payment/Payment"));
const CSR = lazy(() => import("../pages/CSR/CSR"));
const Bookings = lazy(() => import("../pages/booking/Bookings"));


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
    {
        path:"/gallery",
        element: <GalleryLayout />,
        children: [
            {
                index: true,
                element: <Gallery />
            }
        ]
    },
    {
        path:"/allblogs",
        element: <AllBlogLayout />,
        children: [
            {
                index: true,
                element: <AllBlogs />
            },
            {
                path: "oneblog/:id",
                element: <OneBlog />
            }
        ]
    },
    {
        path:"/firsttimer",
        element: <FirstTimerLayout />,
        children: [
            {
                index: true,
                element: <FirstTimer />
            }
        ]
    },
    {
        path:"/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <AboutComp />
            }
        ]
    },
    {
        path:"/csr",
        element: <CsrLayout />,
        children: [
            {
                index: true,
                element: <CSR />
            }
        ]
    },
    {
        path:"/payment",
        element: <PaymentLayout />,
        children: [
            {
                index: true,
                element: <Payment />
            }
        ]
    },
    {
        path:"/bookings",
        element: <BookingsLayout />,
        children: [
            {
                index: true,
                element: <Bookings />
            }
        ]
    },
])
 