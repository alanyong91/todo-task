import "./App.css";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/theme";

import AuthenticationProvider, {
  useAuthenticationContext,
} from "./context/AuthenticationContext";

import Loading from "./components/Loading";
import LoginForm from "./components/LoginForm";
import Authenticated from "./components/Authenticated";

const App: React.FC = () => {
  const { loading, userInfo } = useAuthenticationContext();

  if (loading) return <Loading />

  return !!userInfo ? <Authenticated /> : <LoginForm />;
};

const Authenticate: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <GlobalStyle />
        <App />
      </AuthenticationProvider>
    </ThemeProvider>
  );
};

export default Authenticate;
