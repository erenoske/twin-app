import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Faq from "./pages/Faq.jsx";
import Gallery from "./pages/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./pages/Services.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Twin Baby Spa - Bebek Masajı, Floating, Hidroterapi</title>
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/S.S.S" element={<Faq />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/hizmetlerimiz" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
