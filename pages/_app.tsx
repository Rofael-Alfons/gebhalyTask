import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import SimpleContainer from "../components/SimpleContainer";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <SimpleContainer>
        <Component {...pageProps} />
      </SimpleContainer>
    </Provider>
  );
}
