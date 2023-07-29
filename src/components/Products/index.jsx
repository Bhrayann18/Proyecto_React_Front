import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
/**Se importa los elementos de la carpeta data*/
import { ProductsData } from "../../Data/Data";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);
  
  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          <button onClick={() => AddItemToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;