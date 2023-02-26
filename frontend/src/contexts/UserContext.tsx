import jwtDecode from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type userData = {
  jwt: string;
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserContextType = {
  user: userData | null;
  updateUser: (userData: userData) => void;
  logout: () => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  updateUser: () => {},
  logout: () => {},
});

export const getTokenExpiration = (token: string) => {
  const decodedToken = jwtDecode(token) as { [key: string]: any };
  return decodedToken.exp * 1000;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<userData | null>(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const { exp } = userData;

      if (exp && exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser(userData);
      }
    }
  }, []);

  const updateUser = useCallback((userData: userData) => {
    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("userData");
  }, []);

  const contextValue = useMemo(
    () => ({ user, updateUser, logout }),
    [user, updateUser, logout]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
