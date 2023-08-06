import "@/styles/globals.css";
import DefaultTheme from "@/contexts/theme/DefaultTheme";

export default function App({ Component, pageProps }) {
  return (
    <DefaultTheme>
      <Component {...pageProps} />
    </DefaultTheme>
  );
}
