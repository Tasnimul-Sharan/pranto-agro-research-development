import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
// import nextI18NextConfig from "../next-i18next.config";
function MyApp({ Component, pageProps }) {
  useLenis();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
