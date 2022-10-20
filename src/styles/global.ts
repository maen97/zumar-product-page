import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    ::selection{
        background: ${({ theme }) => theme.palette.common.danger};
        color: #fff;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.main};
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${({ theme }) => theme.fonts.title};
    }

    a {
        text-decoration: none;
        color: inherit;
        font: inherit;
    }
    
    li{
        list-style: none;
    }
 `;
