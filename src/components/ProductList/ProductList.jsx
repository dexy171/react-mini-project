import { SingleProduct } from "../SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorInfo } from "./components/ErrorInfo/ErrorInfo";
import { CircularProgress } from "@mui/material";
import { EmptyList } from "./components/EmptyList/EmptyList";

export const ProductList = (props) => {
  const [product, setProduct] = useState([]);
  const [showError, setShowError] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://dummyjson.com/products/category/${props.selectedCategory}`)
      .then((response) => setProduct(response.data.products))
      .catch(() => setShowError(true))
      .finally(() => setIsFetching(false));
  }, [props.selectedCategory]);

  if (isFetching) {
    return <CircularProgress />;
  }

  if (showError) {
    return <ErrorInfo />;
  }

  if (product.length === 0 || !product) {
    return <EmptyList />;
  }

  return (
    <div>
      {product.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
};
