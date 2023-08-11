import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import { ContextProvider } from "./contexts/Context";
import SignUpPage from "../src/pages/SignUpPage";
import SignInPage from "../src/pages/SignInPage";
import PorosPage from "../src/pages/PorosPage";

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
