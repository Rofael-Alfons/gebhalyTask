import axios from "axios";
import { Console } from "console";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SimpleContainer from "../components/SimpleContainer";
import { getProducts, productsActions } from "../store/store";

const Home = (props) => {
  const dispatch = useDispatch<any>();
  const products = useSelector((state: any) => state.products.products);
  const loading = useSelector((state: any) => state.products.loading);
  useEffect(() => {
    dispatch(getProducts());
    console.log(props.products);
  }, []);

  const addToCartHandler = (prdTitle) => {
    dispatch(productsActions.addToCart(prdTitle));
  };
  return (
    <SimpleContainer>
      {loading ? (
        <LoadingSpinner />
      ) : (
        products.map((prd, i) => {
          return (
            <ProductCard
              key={i}
              addToCart={() => addToCartHandler(prd.title)}
              title={prd.title}
              imgURL={prd.image}
              price={prd.price}
            />
          );
        })
      )}
    </SimpleContainer>
  );
};

export default Home;
