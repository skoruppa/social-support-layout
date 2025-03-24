
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewsArticle from "./pages/NewsArticle";
import Article from "./pages/Article";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/events-2025" element={<NotFound />} />
          <Route path="/archive" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/rodo" element={<NotFound />} />
          <Route path="/projects" element={<NotFound />} />
          <Route path="/accessibility-declaration" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
