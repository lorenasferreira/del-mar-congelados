import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import NotFound from "./pages/NotFound/NotFound";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Products />} />
          <Route path="nossa-historia" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
