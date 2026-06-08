import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import BookingCTA from "./components/BookingCTA";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import CookieConsent from "./components/CookieConsent";
import PrivacyPage from "./pages/Privacy";

// ── Simple Client-Side Router ─────────────────────────────
function useRouter() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { pathname };
}

// ── Homepage ──────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <About />
        <Reviews />
        <Gallery />
        <BookingCTA />
        <FindUs />
      </main>
      <Footer />
      <ChatBot />
      <CookieConsent />
    </>
  );
}

// ── App Root ──────────────────────────────────────────────
export default function App() {
  const { pathname } = useRouter();

  // Route to privacy page
  if (pathname === "/privacy" || pathname === "/privacy/") {
    return (
      <>
        <PrivacyPage />
        <CookieConsent />
      </>
    );
  }

  // Default: Homepage
  return <HomePage />;
}
