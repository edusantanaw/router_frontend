import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    li {
        list-style: none;
    }

    body {
        background-color: #1d1d1d;
    }

    .content {
        display: flex;
    }

    a {
        text-decoration: none;
    }
`;
