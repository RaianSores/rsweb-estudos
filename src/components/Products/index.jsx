import P from "prop-types";

//import "./styles.module.css";

import styles from "./styles.module.css";

import { ProductsCard } from "../ProductsCard";

export const Products = ({ products = [] }) => (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          title={product.title}
          id={product.id}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          
        />
      ))}
    </div>
 );

 Products.propTypes = {
  products: P.arrayOf(
    P.shape({
      title: P.string,
      id: P.number.isRequired,
      price: P.number.isRequired,
      description: P.string.isRequired,
      category: P.string.isRequired,
      image: P.string.isRequired,
      //rating: P.object.isRequired,
    })
  ),
};

