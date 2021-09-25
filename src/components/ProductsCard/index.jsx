import P from "prop-types";
import styles from "./styles.module.css";

export const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => (
  <div className={styles.product}>
    <img src={image} alt={title} />
    <div className="product-content">
      <h1>
        Nome: {title} {id}
      </h1>
      <h2>{description}</h2>
      <p>{category}</p>
      <strong>{price}</strong>
    </div>
  </div>
);

ProductsCard.propTypes = {
  title: P.string,
  id: P.number.isRequired,
  price: P.number.isRequired,
  description: P.string.isRequired,
  category: P.string.isRequired,
  image: P.string.isRequired,
  //rating: P.object.isRequired,
};
