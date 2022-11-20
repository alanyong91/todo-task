import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktopMinWidth}) {
    width: ${({theme}) => theme.basic.containerWidth};
    margin-left: auto;
    margin-right: auto;
  }
`

export const Box = styled.div`
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.whiteBackground};
`;

export const FormContainer = styled(Box)`
  width: 296px;
  border-radius: 12px;
  padding: 24px;

  form {
    display: flex;
    flex-direction: column;

    input[type="text"] {
      margin-bottom: 12px;
    }
  }
`;

export const HeaderContainer = styled(Box)<{ profileImage: string }>`
  padding: 12px 24px;
  margin-bottom: 12px;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user {
    width: 70%;
    display: flex;
    align-items: center;

    .img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: block;
      margin-right: 16px;
      background-image: ${({ profileImage }) => `url(${profileImage})`};
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
    }

    .name {
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.heading};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .logout {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const NoTaskContainer = styled(Box)`
  padding: 37px 0;
  text-align: center;
`;

export const TaskCompletedContainer = styled(Box)`
  margin-bottom: 8px;
  padding: 24px 32px;

  h3 {
    margin-bottom: 4px;
  }

  .number {
    display: flex;
    align-items: flex-end;

    .completed {
      color: ${({ theme }) => theme.colors.button};
      font-size: 64px;
    }

    .total {
      color: #8f9ea2;
      font-size: 20px;
    }
  }
`;

export const LatestTasksContainer = styled(Box)`
  padding: 24px 32px;

  h3 {
    margin-bottom: 12px;
  }

  ul {
    margin: 0;
    padding-left: 15px;

    li {
      color: #8F9EA2;
      font-size: 14px;

      &.completed {
        text-decoration: line-through;
      }
    }
  }
`;
