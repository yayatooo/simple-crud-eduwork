import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddProducts from "./components/AddProducts";
import EditProducts from "./components/EditProducts";
import DetailProducts from "./components/DetailProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddProducts />} />
          <Route path="edit/:id" element={<EditProducts />} />
          <Route path="detail/:id" element={<DetailProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
