import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
	* {
        box-sizing: border-box;
		font-family: 'Mulish', sans-serif;
        color: white;
        
    }
    body {
        font-family: 'Mulish', sans-serif;
        color: white;
        font-weight: 200;
    }
    h2 {
        font-family: 'Mulish', sans-serif;
        font-size: 13px;
        font-weight: 700;
    }
`;

export default GlobalStyle;
