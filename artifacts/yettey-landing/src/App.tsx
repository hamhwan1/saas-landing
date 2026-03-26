import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import AssetManagement from "@/pages/product/AssetManagement";
import AiCreation from "@/pages/product/AiCreation";
import VideoAutomation from "@/pages/product/VideoAutomation";
import TeamCollaboration from "@/pages/product/TeamCollaboration";
import ForCreators from "@/pages/use-cases/ForCreators";
import ForMarketers from "@/pages/use-cases/ForMarketers";
import ForTeams from "@/pages/use-cases/ForTeams";
import Blog from "@/pages/resources/Blog";
import Guides from "@/pages/resources/Guides";
import HelpCenter from "@/pages/resources/HelpCenter";
import NotFound from "@/pages/not-found";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/product/asset-management" component={AssetManagement} />
          <Route path="/product/ai-creation" component={AiCreation} />
          <Route path="/product/video-automation" component={VideoAutomation} />
          <Route path="/product/team-collaboration" component={TeamCollaboration} />
          <Route path="/use-cases/creators" component={ForCreators} />
          <Route path="/use-cases/marketers" component={ForMarketers} />
          <Route path="/use-cases/teams" component={ForTeams} />
          <Route path="/blog" component={Blog} />
          <Route path="/guides" component={Guides} />
          <Route path="/help" component={HelpCenter} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
