import { createGlobalStyle } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { GlobalFonts } from './fonts/fonts'

export const GlobalStyle = createGlobalStyle`

	${GlobalFonts}

	body {	
		font-family: 'Roboto', sans-serif;
		padding: 20px;
		${breakpoint('xs', 'sm')`
			padding: 5px;
		`}
	}
`

