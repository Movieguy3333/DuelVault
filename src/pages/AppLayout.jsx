/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNav from "../components/AppNav";
import Collection from "../components/Collection";
import Instructions from "../components/Instructions";

function AppLayout() {
  return (
    <div className="app">
      <Instructions />
      <AppNav />
      <Outlet />
      <Collection />
    </div>
  );
}

export default AppLayout;
