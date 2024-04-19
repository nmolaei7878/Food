import BaseLayout from "Components/Layout/BaseLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "Styles/main.scss";

import Vendor from "Pages/Vendor";

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
