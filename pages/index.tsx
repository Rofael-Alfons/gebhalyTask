import axios from "axios";
import { Console } from "console";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SimpleContainer from "../components/SimpleContainer";
import { getProducts, productsActions, store } from "../store/store";

const Home = (props) => {
  const dispatch = useDispatch<any>();
  const products = props.products;
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

export async function getStaticProps() {
  await store.dispatch(getProducts());

  const products = store.getState().products.products;
  return {
    props: {
      products,
    },
  };
}

export default Home;
