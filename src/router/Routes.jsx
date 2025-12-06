import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
    },
]);

export default Routes;
