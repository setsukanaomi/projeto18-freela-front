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
    /* Ocultar a barra de rolagem vertical */
::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

/* Estilizar o indicador da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

/* Estilizar a área em que o indicador se move */
::-webkit-scrollbar-track {
  background-color: transparent;
}

`;

export default GlobalStyle;
