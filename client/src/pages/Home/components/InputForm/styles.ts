import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  `}
`;

export const InputBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 4px;
    border: 0;
    padding: 4px;
    border-radius: 8px;
    background: ${theme.gray600};
    color: ${theme.gray100};
  `}
`;

export const Label = styled.label`
  font-size: 0.75rem;
  width: 80%;
  padding: 4px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.gray600};
    color: ${theme.gray100};
    border-radius: 8px;
    border: 0;
    width: 20%;
    padding: 4px;
    text-align: center;
    &:focus {
      background: ${theme.gray500};
    }
    &:hover {
      transform: scale(1.01);
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    position: relative;
    border: 0;
    background: ${theme.gray200};
    border-radius: 8px;
    color: ${theme.gray800};
    width: 70%;
    text-align: center;
    font-size: 1rem;
    margin-top: 8px;
    padding: 4px;
    transition: background-color 0.1s;
    position: relative;
    z-index: 1;

    &:hover {
      cursor: pointer;
      color: ${theme.gray900};
      background: ${theme.gray100};
      transform: scale(1.01);
    }
  `}
`;
