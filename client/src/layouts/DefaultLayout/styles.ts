import styled, { css } from "styled-components";
// import backgroundImage from "../../assets/background.jpg";

export const LayoutContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      to right,
      rgba(32, 124, 229, 1) 0%,
      rgba(48, 136, 231, 1) 39%,
      rgba(50, 137, 231, 1) 43%,
      rgba(73, 155, 234, 1) 100%
    );
    min-height: 100vh;
    width: 100%;
  `}
`;
