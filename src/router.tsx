import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // GitHub Pages serves prerendered folders at /page/, so keep URLs slash-terminated.
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
