import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProductsPage } from "./pages/products/Page";
import { HomePage } from "./pages/home/Page";


export function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/products" element={<ProductsPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

