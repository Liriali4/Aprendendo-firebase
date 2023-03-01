
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<h1>Ops! Este capítulo está sendo escrito.</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;