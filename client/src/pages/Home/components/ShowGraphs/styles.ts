import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 262px;
  height: 196px;

  &:hover {
    transform: scale(1.4);
  }
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
