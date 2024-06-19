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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
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
