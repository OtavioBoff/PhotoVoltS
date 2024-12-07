import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "gg sans", Arial, sans-serif;
    ${({ theme }) => css`
      /* Global Scrollbar Styling */
      /* Para navegadores Webkit */
      ::-webkit-scrollbar {
        width: 12px;
      }
      ::-webkit-scrollbar-track {
        background: ${theme.gray800};
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.gray500};
        border-radius: 8px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.green500};
      }

      /* Para navegadores Firefox */
      body {
        scrollbar-width: thin;
        scrollbar-color: ${theme.gray500} ${theme.gray800};
      }
    `}
}

:focus{
    outline: 0;
}
`;
