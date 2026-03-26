import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function Router() {
  return (
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
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
