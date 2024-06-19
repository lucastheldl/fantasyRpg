import { AuthContextProvider } from "@/context/AuthContext";
import { GameContextProvider } from "@/context/GameContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <GameContextProvider>
        <Component {...pageProps} />
      </GameContextProvider>
    </AuthContextProvider>
  );
}
