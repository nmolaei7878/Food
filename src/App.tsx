import BaseLayout from "Components/Layout/BaseLayout";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "Styles/main.scss";

const Vendor = React.lazy(() => import("Pages/Vendor"));

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/vendor"} />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
