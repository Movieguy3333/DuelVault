/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNav from "../components/AppNav";
import Collection from "../components/Collection";

function AppLayout({ collection, setCollection }) {
  return (
    <div className="app">
      <Header />
      <AppNav />
      <Outlet context={{ collection, setCollection }} />
      <Collection collection={collection} />
      <Footer />
    </div>
  );
}

export default AppLayout;
