import axios from "axios";
import { createContext, useEffect, useState } from "react";

export type userData = {
  jwt: string;
  id: number;
  name: string;
  username: string;
  email: string;
};

type AuthContextType = {
  user: userData | null;
  signin: (identifier: string, password: string) => Promise<any>;
  signout: () => void;
} | null;

const AuthContext = createContext<AuthContextType>(null);

export function AuthProvider({ children }: any) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (identifier: string, password: string) => {
    return axios
      .post(process.env.REACT_APP_API + "/api/auth/local", {
        identifier: identifier,
        password: password,
      })
      .then((response: any) => {
        setUser(response);
        return response;
      });
  };

  const signout = () => {
    setUser(null);
  };

  useEffect(() => {}, []);

  return {
    user,
    signin,
    signout,
  };
}
