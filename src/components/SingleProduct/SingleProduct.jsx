import styles from "./SingleProduct.module.css";

export const SingleProduct = (props) => {
  return (
    <section className={styles.container}>
      <div>
        <img src={props.product.thumbnail} className={styles.thumbnail} />
      </div>
      <div>
        <h3>{props.product.title}</h3>
        <p>{props.product.description}</p>
        <p>Price: {props.product.price}$</p>
      </div>
    </section>
  );
};
