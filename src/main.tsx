import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "src/styles/global-styles";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ModalProvider } from "./src/context/ModalContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <React.StrictMode>
      {globalStyles}
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <App />
        </ModalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  </>
);
