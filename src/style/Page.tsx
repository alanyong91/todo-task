import styled from "styled-components";

import {
  FormContainer,
  TaskCompletedContainer,
  LatestTasksContainer,
} from "./Container";

import { SearchIcon } from "../static/icons";

export const LoginPageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaskModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  flex-direction: column;

  .overlay-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  ${FormContainer} {
    position: relative;
    margin-top: 84px;
    z-index: 2;
  }
`;

export const OverviewContainer = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktopMinWidth}) {
    display: flex;
    margin-left: -12px;
    margin-right: -12px;
    margin-bottom: 34px;

    ${TaskCompletedContainer},
    ${LatestTasksContainer} {
      flex-grow: 1;
      flex-basis: 0;
      margin: 0 12px;
    }
  }
`;

export const TaskTableContainer = styled.div`
  margin-bottom: 11px;

  .table-header {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    h3 {
      margin-bottom: 8px;
      text-align: center;
    }

    .table-cta {
      display: flex;
      flex-direction: column;

      input[type="text"] {
        padding-left: 40px;
        margin-bottom: 8px;

        background-color: #d9dfeb;
        background-image: url(${SearchIcon});
        background-position: center left 15px;
        background-repeat: no-repeat;

        text-align: center;
      }
    }
  }

  .table {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.whiteBackground};

    .task {
      padding: 24px 0;
      margin-left: 16px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 2px solid #e8e8e8;

      .item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        cursor: pointer;

        .checkbox {
          width: 19px;
          height: 19px;
          background-color: #ffffff;
          border: 2px solid #95a4ab;
          border-radius: 4px;
          margin-right: 12px;
          position: relative;
          flex-shrink: 0;
        }

        .name {
          font-size: 20px;
          font-weight: 500;

          span {
            color: ${({ theme }) => theme.colors.button};
          }
        }

        &.completed {
          .checkbox {
            background-color: #707070;
            border-color: #707070;
          }

          .name {
            color: #707070;
            position: relative;
            text-decoration: line-through;

            span {
              color: ${({ theme }) => theme.colors.heading};
            }
          }
        }
      }

      .cta {
        display: flex;
        margin-left: 20px;
        flex-shrink: 0;

        .btn {
          margin-right: 13px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          svg {
            display: block;
          }
        }
      }
    }

    .no-task {
      padding: 24px 16px;
      box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.border};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktopMinWidth}) {
    .table-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0;

      h3 {
        margin-bottom: 0;
        text-align: left;
      }

      .table-cta {
        display: flex;
        flex-direction: row;

        input[type="text"] {
          width: 244px;
          margin-bottom: 0;
          margin-right: 12px;
          text-align: left;
        }
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 20px;
  font-weight: bold;
`