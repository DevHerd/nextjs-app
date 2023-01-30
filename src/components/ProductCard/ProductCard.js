import styles from './ProductCard.module.scss';

const ProductCard = ({ name, price }) => {
  console.log(name);
  console.log(price);

  return (
    <div className={styles.ProductCard}>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
