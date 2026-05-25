import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LeMinistere from "./pages/LeMinistere";
import Structures from "./pages/Structures";
import Actualites from "./pages/Actualites";
import Citoyen from "./pages/Citoyen";
import Contact from "./pages/Contact";
import Organigramme from "./pages/Organigramme";
import CodeInvestissementsPage from "./pages/CodeInvestissements";
import ForumOci from "./pages/ForumOci";
import ProjetsPage from "./pages/Projets";
import Galerie from "./pages/Galerie";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/le-ministre" component={LeMinistere} />
        <Route path="/organigramme" component={Organigramme} />
        <Route path="/structures" component={Structures} />
        <Route path="/code-des-investissements" component={CodeInvestissementsPage} />
        <Route path="/forum-oci-afrique" component={ForumOci} />
        <Route path="/projets-en-cours" component={ProjetsPage} />
        <Route path="/citoyen" component={Citoyen} />
        <Route path="/actualites" component={Actualites} />
        <Route path="/contact" component={Contact} />
        <Route path="/galerie" component={Galerie} />
        <Route path="/404" component={NotFound} />
        {/* Fallback */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
