import BaseLayout from "Components/Layout/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "Styles/main.scss";

import Vendor from "Pages/Vendor";
import Home from "Pages/Home";

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
