import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import DevNavigation from "./components/DevNavigation";
import Footer from "./components/Footer";
import PersonJsonLd from "./components/PersonJsonLd";
import OnePage from "./pages/OnePage";

const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PersonJsonLd />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background">
            <DevNavigation />
            <main className="flex-1">
              <Suspense fallback={<div className="min-h-screen" />}>
                <Routes>
                  <Route path="/" element={<OnePage />} />
                  <Route path="/about" element={<OnePage />} />
                  <Route path="/skills" element={<OnePage />} />
                  <Route path="/projects" element={<OnePage />} />
                  <Route path="/contact" element={<OnePage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
