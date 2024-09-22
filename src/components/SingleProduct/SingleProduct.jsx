import styles from "./SingleProduct.module.css";

export const SingleProduct = (props) => {
  return (
    <section className={styles.container}>
      <div>
        <img
          src={props.product.thumbnail}
          alt={props.product.title}
          className={styles.thumbnail}
        />
      </div>
      <div>
        <h2 className={styles.title}>{props.product.title}</h2>
        <p>{props.product.description}</p>
        <p className={styles.price}>Price: {props.product.price}$</p>
      </div>
    </section>
  );
};
