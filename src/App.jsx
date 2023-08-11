import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import { ContextProvider } from "./contexts/Context";
import SignUpPage from "./pages/SignupPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
