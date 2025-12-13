import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProductsPage } from "../pages";
import { Layout } from "./layout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
