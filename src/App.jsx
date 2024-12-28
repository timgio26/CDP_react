import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./pages/AppLayout";
import { Dashboard } from "./pages/dashboard";
import { CustomerList } from "./pages/CustomerList";
import { CustomerDetail } from "./pages/CustomerDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/customers" element={<CustomerList/>} />
          <Route path="/customer/:id" element={<CustomerDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
