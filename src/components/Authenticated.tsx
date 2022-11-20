import { useAuthenticationContext } from "../context/AuthenticationContext";
import TaskProvider from "../context/TaskContext";

import { HeaderContainer, Container } from "../style/Container";

import Dashboard from "./Dashboard";

const Authenticated: React.FC = () => {
  const { userInfo, onLogout } = useAuthenticationContext();

  return (
    <>
      <HeaderContainer profileImage={userInfo!.imageProfile}>
        <Container>
          <div className="user">
            <div className="img" />
            <div className="name">{userInfo!.name}</div>
          </div>
          <div className="logout" onClick={onLogout}>
            Logout
          </div>
        </Container>
      </HeaderContainer>
      <TaskProvider>
        <Dashboard />
      </TaskProvider>
    </>
  );
};

export default Authenticated;
