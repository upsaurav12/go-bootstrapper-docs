import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import CLIOptions from "./pages/docs/CLIOptions";
import ProjectStructure from "./pages/docs/ProjectStructure";
import Roadmap from "./pages/docs/Roadmap";
import Contributing from "./pages/docs/Contributing";
import License from "./pages/docs/License";
import  Prompt  from "./pages/docs/UserPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/quick-start" element={<QuickStart />} />
          <Route path="/docs/cli-options" element={<CLIOptions />} />
          <Route path="/docs/project-structure" element={<ProjectStructure />} />
          <Route path="/docs/roadmap" element={<Roadmap />} />
          <Route path="/docs/contributing" element={<Contributing />} />
          <Route path="/docs/license" element={<License />} />
          <Route path="/docs/prompt" element={<Prompt />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
