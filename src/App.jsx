import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import context from "./context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detalle from "./pages/Detalle";
import Carrito from "./pages/Carrito";



const App = () => {

  const [pizzas, setPizzas] = useState([]);

  const endpoint = "/pizzas.json";

  const getPizzas = async () => {
    const url = endpoint;
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);


  return (
    <context.Provider value={{pizzas}} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pizzas/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default App;
