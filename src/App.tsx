import BaseLayout from "Components/Layout/BaseLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "Styles/main.scss";
import { ToastContainer, toast } from 'react-toastify';
import Vendor from "Pages/Vendor";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BaseLayout>
      
      <ToastContainer
position="bottom-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
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
