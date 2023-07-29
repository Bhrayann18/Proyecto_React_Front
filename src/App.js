import { BrowserRouter, Routes, Route } from "react-router-dom";
/**Importacion del contenido de la carpeta components*/
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";

import Login from "./components/Login";
import Register from "./components/Register";
import styles from './App.module.scss'

const App = () => {
  return (
    /**Rutas a ejecutar*/
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <CartProvider>
        <Home />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;