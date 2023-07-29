import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import styles from './styles.module.scss'

/**Rutas a ejecutar que son de la carpeta cart y carpeta product*/
const Home = () => {
    return (
        <div className={styles.home}>
            <Cart />
            <Products />
        </div>
    )
}
export default Home