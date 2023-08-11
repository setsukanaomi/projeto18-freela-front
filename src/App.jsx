import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import { ContextProvider } from "./contexts/Context";
import SignUpPage from "./pages/SignupPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import PorosPage from "./pages/PorosPage.jsx";

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/poros" element={<PorosPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
