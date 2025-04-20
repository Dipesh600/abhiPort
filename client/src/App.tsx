import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount component after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update the HTML document class when the theme changes
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      
      if (resolvedTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [resolvedTheme, mounted]);

  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
