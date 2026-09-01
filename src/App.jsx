import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./components/shared/PageLayout.jsx";
import About from "./pages/About.jsx";
import Conferences from "./pages/Conferences.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
