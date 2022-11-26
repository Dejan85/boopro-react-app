import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "src/styles/global-styles";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // This is features from old versions. I check in new documentations, this should be sated as default by RC, but its not.
      // If i remove this, we will have unnecessary renders. Now i have TS error, but everything works fine.
      // Here is doc about this issues: https://tanstack.com/query/v4/docs/guides/migrating-to-react-query-4
      notifyOnChangeProps: "tracked",
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {globalStyles}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
