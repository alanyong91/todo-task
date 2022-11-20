import React, { useState } from "react";

import { useAuthenticationContext } from "../context/AuthenticationContext";

import { LoginPageContainer } from "../style/Page";
import { FormContainer } from "../style/Container";

const LoginForm = () => {
  const { onLogin } = useAuthenticationContext();

  const [formData, setFormData] = useState<{
    [key: string]: string;
  }>({
    userId: "",
    name: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData({
      [id]: value,
    });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await onLogin({
      userId: formData.userId,
      name: formData.name,
    });
  };

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <h3>Login</h3>
          <input type="text" id="userId" placeholder="Id" onChange={onChange} autoFocus autoComplete="off" />
          <input type="text" id="name" placeholder="Name" onChange={onChange} autoComplete="off" />
          <button>Login</button>
        </form>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginForm;
