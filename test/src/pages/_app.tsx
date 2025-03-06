import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/pages/auth/AuthContext";
import Layout from "@/pages/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </AuthProvider>
  )
}
