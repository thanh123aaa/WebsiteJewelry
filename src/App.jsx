import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Account from "./components/Account";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";

import CartProvider from "./store/CartContext";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer/>
      </CartProvider>
    </>
  );
}

