import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../dist/styles.css";
import "../../types";
import { SessionProvider } from "next-auth/react";

import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModel";
import LogoutModal from "@/components/modals/LogoutModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RegisterModal />
      <LoginModal />
      <LogoutModal />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
