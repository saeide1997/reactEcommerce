import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserList from "./Pages/UserList";
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";
import LoginPage from "./Pages/LoginPage";
import OrderList from "./Pages/OrderList";
import Order from "./Pages/Order";
import Analisys from "./Pages/Analisys";

function App() {
  const [message, setMessage] = useState("");
  const isAuthenticated = localStorage.getItem("token"); // بررسی لاگین بودن

  useEffect(() => {
    fetch("https://ecommercedata.up.railway.app/")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* اگر کاربر لاگین نکرده باشد، به صفحه لاگین هدایت شود */}
        <Route
          path="/"
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// کامپوننتی که کل ساختار صفحه لاگین‌شده را نگه می‌دارد
const MainLayout = () => {
  return (
    <>
      <Topbar />
      <div className="containerr">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:Id" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/order/:orderId" element={<Order />} />
          <Route path="/analisys" element={<Analisys />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
