import { app } from "@/firebase/config";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ReactNode, useEffect, useState, createContext } from "react";

const auth = getAuth(app);

interface AuthContextType {
  user: User | null;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

    // Calculate the expiration date
    const expirationDate = new Date(Date.now() + twoDaysInMillis);
    const expires = expirationDate.toUTCString();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        document.cookie = `userID=${user.uid}; expires=${expires}; path=/`;
      } else {
        setUser(null);
        document.cookie = `userID=; expires=${expires}; path=/;`;
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  function logOut() {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {loading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  );
}
