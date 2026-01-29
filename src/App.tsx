import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Profiles from "./pages/Profiles";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// Location Pages
import Mahipalpur from "./pages/location/Mahipalpur";
import MahipalpurVIP from "./pages/location/mahipalpur/MahipalpurVIP";
import MahipalpurCallGirls from "./pages/location/mahipalpur/MahipalpurCallGirls";
import MahipalpurIndependent from "./pages/location/mahipalpur/MahipalpurIndependent";
import MahipalpurRussian from "./pages/location/mahipalpur/MahipalpurRussian";
import MahipalpurHotel from "./pages/location/mahipalpur/MahipalpurHotel";
import Mahipalpur247 from "./pages/location/mahipalpur/Mahipalpur247";

// Delhi Page
import DelhiEscorts from "./pages/DelhiEscorts";

// Aerocity Location Pages
import Aerocity from "./pages/location/aerocity/Aerocity";
import AerocityVIP from "./pages/location/aerocity/AerocityVIP";
import AerocityCallGirls from "./pages/location/aerocity/AerocityCallGirls";
import AerocityIndependent from "./pages/location/aerocity/AerocityIndependent";
import AerocityHotel from "./pages/location/aerocity/AerocityHotel";
import Aerocity247 from "./pages/location/aerocity/Aerocity247";

// Generic Page for other locations
import GenericLocationPage from "./pages/GenericLocationPage";
import { locationList } from "./data/locationList";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Mahipalpur Location Pages */}
          <Route path="/mahipalpur" element={<Mahipalpur />} />
          <Route path="/mahipalpur/vip-escorts" element={<MahipalpurVIP />} />
          <Route path="/mahipalpur/call-girls" element={<MahipalpurCallGirls />} />
          <Route path="/mahipalpur/independent-escorts" element={<MahipalpurIndependent />} />
          <Route path="/mahipalpur/russian-escorts" element={<MahipalpurRussian />} />
          <Route path="/mahipalpur/hotel-escorts" element={<MahipalpurHotel />} />
          <Route path="/mahipalpur/24-7-escorts" element={<Mahipalpur247 />} />

          {/* Delhi Main Landing */}
          <Route path="/escort-in-delhi" element={<DelhiEscorts />} />

          {/* Aerocity Location Pages */}
          <Route path="/aerocity" element={<Aerocity />} />
          <Route path="/aerocity/vip-escorts" element={<AerocityVIP />} />
          <Route path="/aerocity/call-girls" element={<AerocityCallGirls />} />
          <Route path="/aerocity/independent-escorts" element={<AerocityIndependent />} />
          <Route path="/aerocity/hotel-escorts" element={<AerocityHotel />} />
          <Route path="/aerocity/24-7-escorts" element={<Aerocity247 />} />

          {/* Dynamic Location Pages */}
          {locationList.map((loc) => (
            <Route
              key={loc.slug}
              path={loc.slug}
              element={<GenericLocationPage locationName={loc.name} />}
            />
          ))}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
