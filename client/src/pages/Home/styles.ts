import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    align-items: center;
    width: 90%;
    max-width: 400px;
    border-radius: 8px;
    background: transparent;
    padding: 8px;
    margin: 1rem;
  `}
`;
export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    align-items: center;
    width: 90%;
    max-width: 320px;
    border-radius: 8px;
    background: ${theme.gray800};
    padding: 8px;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.5rem;
    padding: 4px;
    color: ${theme.gray100};
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `}
`;
