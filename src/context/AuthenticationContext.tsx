import React, { useState, useEffect, useContext } from "react";

import { loginApi } from "../utils/api";
import TaskCookie from "../utils/cookie";

export const AuthenticationContext =
  React.createContext<AuthenticationContextProps>({
    loading: true,
    userInfo: null,
    onLogin: async () => {},
    onLogout: () => {},
  });

export  const useAuthenticationContext = () => useContext(AuthenticationContext);

const AuthenticationProvider: React.FC<Props> = ({ children }) => {
  const cookie = new TaskCookie();

  const [loading, setLoading] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogin = async (body: LoginBodyType) => {
    try {
      const data = await loginApi(body);

      setUserInfo({
        imageProfile: data.image,
        name: data.token.name,
      });
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  const onLogout = () => {
    cookie.removeToken();
    cookie.removeUserName();
    setUserInfo(null);
  };

  const checkAuthentication = async () => {
    const name = cookie.getUserName();
    const token = cookie.getToken();

    if (name && token && !userInfo) {
      await onLogin({
        userId: "",
        name,
      });
    }

    setLoading(false)
  };

  return (
    <AuthenticationContext.Provider value={{ loading, userInfo, onLogin, onLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
