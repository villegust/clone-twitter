import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../dist/styles.css";
import "../../types";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
