import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="sign-up" element={<h1>Sign-Up</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="valuation" />} />
          <Route path="valuation" element={<h1>Valuation</h1>} />
          <Route path="addtocollection" element={<h1>Add to Collection</h1>} />
        </Route>
        <Route path="*" element={<h1>PageNotFound</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
