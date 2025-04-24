import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Valuations from "./components/Valuations";
import AddToCollection from "./components/AddToCollection";
import { AppProvider } from "./contextapi/AppContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Account from "./components/Account";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="valuations" />} />
            <Route path="valuations" element={<Valuations />} />
            <Route path="add-to-collection" element={<AddToCollection />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
