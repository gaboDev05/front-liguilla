import styled from 'styled-components'

// Define el estilo de PrimaryButton component
export const StyledPrimaryButton = styled.button`
    border-radius: 4px; // Permite redondear las esquinas de los bordes de un elemento
    width: 100%; // Se utiliza para establecer el ancho del área de contenido de un elemento. Esta "área de contenido" es la porción dentro del padding, borde y margen de un elemento (el modelo de caja)
    font-size: 1.1rem; // Se utiliza para determinar el tamano de la fuente
    font-weight: bold;
    background: #ADFF01; // Se utiliza para definir el color de fondo del elemento
    // Se utiliza para dibujar una línea alrededor de un elemento, fuera del bordepara hacer que el elemento se destaque. 
    // A diferencia de border, el outline se dibuja fuera del borde del elemento y puede superponerse con otros contenidos
    outline: none; 
    padding: 0.6rem; // Se utiliza para generar espacio alrededor del contenido de un elemento, dentro de sus bordes
    margin-top: 1.5rem; // Se utiliza para definir el margen superior de un elemento. El margen es el espacio alrededor de un elemento, fuera de cualquier borde y padding.
    // Se se utiliza para definir cómo se posiciona un elemento en un documento.
    // relative: El elemento se posiciona en relación a su posición normal. Las propiedades top, right, bottom y left desplazan el elemento desde su posición normal.
    position: relative;
	overflow: hidden; // Se utiliza para especificar qué ocurre cuando el contenido de un elemento excede el tamaño de su caja contenedora.
    border: 1px solid transparent;
    font-family: inherit;
    box-sizing: border-box;
    border: 2px solid transparent;
    color: black;

    &:hover {
        color: white;
        background: black;
        //border-color: #55F9B8;
        transition: 0.2s ease-in;
	}

    /* Tengo que valorar esto
    &:before {
		position: absolute; 
		left: 0;
		bottom: 0;
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background-color: #D5D5D5;
		transform-origin: 0 bottom 0;
		transform: scaleY(0);
		transition: .4s ease-out;
	}
	
	&:hover {
		.post-title {
			color: #FFF;
		}
		&:before {
			transform: scaleY(1);
		}
	}*/
`;