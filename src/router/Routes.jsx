import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import SecondLayout from "../Layouts/SecondLayout";
import Sample from "../Pages/Sample2";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
    },
    {
        path: "/page-2",
        element: <SecondLayout></SecondLayout>
    },
    {
        path: "/sample",
        element: <Sample></Sample>
    },
]);

export default Routes;
