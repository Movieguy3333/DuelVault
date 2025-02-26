import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNav from "../components/AppNav";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
