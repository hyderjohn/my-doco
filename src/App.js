import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OrderSuccessful from "./Components/OrderSuccessful";

import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/success" element={<OrderSuccessful />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
