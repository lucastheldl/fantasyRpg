import { AuthContextProvider } from "@/context/AuthContext";
import { GameContextProvider } from "@/context/GameContext";
import { globalStyles } from "./../styles/global";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <AuthContextProvider>
      <GameContextProvider>
        <Component {...pageProps} />
      </GameContextProvider>
    </AuthContextProvider>
  );
}
