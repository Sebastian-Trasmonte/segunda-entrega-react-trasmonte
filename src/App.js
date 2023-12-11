import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./Pages/LayOut";
import Home from "./Pages/Home";
import Categorias from "./Pages/categorias";
import Productos from "./Pages/Productos";
import Mayorista from "./Pages/Mayorista";
import Producto from "./Pages/Producto";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Productos/:ProductoId" element={Producto} />
          <Route path="Categorias" element={<Categorias />} />
          <Route path="Mayorista" element={<Mayorista />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;