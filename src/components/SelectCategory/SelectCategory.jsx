import styles from "./SelectCategory.module.css";

export const SelectCategory = (props) => {
  const handleOnChange = (e) => {
    props.setSelectedCategory(e.target.value);
  };
  return (
    <section className={styles.container}>
      <section className={styles.heading}>
        <h1>Browsing category: {props.selectedCategory}</h1>
      </section>
      Select to change category:
      <select
        value={props.selectedCategory}
        onChange={handleOnChange}
        className={styles.select}
      >
        <option value="furniture">Furniture</option>
        <option value="tablets">Tablets</option>
        <option value="groceries">Groceries</option>
        <option value="laptops">Laptops</option>
        <option value="beauty">Beauty</option>
        <option value="xyz">Invalid category</option>
      </select>
    </section>
  );
};
