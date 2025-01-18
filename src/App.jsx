import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./pages/AppLayout";
import { Dashboard } from "./pages/dashboard";
import { CustomerList } from "./pages/CustomerList";
import { CustomerDetail } from "./pages/CustomerDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { AddressDetail } from "./pages/AddressDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/customer/:id" element={<CustomerDetail />} />
              <Route path="/address/:id" element={<AddressDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}
