import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Valuations from "./components/Valuations";
import AddToCollection from "./components/AddToCollection";
import { AppProvider } from "./contextapi/AppContext"; // Import the provider

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="valuation" />} />
            <Route path="valuation" element={<Valuations />} />
            <Route path="add-to-collection" element={<AddToCollection />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
