import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Foooter from "./Foooter/Foooter";
import { Outlet } from "react-router-dom";
export default function OutletRoute() {
  return (
    <>
      <Header />
      <Outlet />     
      <Foooter />
      <Footer />
    </>
  );
}
