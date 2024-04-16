import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
const MapList = React.lazy(() => import("../views/MapList"));
const Layout = React.lazy(() => import("../layout"));
const Loader = React.lazy(() => import("../components/Loader"));

function AppRoutes() {
  return (
    <BrowserRouter basename="/geolocationMap">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route name="Home" element={<Layout />}>
            <Route path="/" name="Movie List" element={<MapList />} />
            <Route path="*" element={<Navigate to="Movie List" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
