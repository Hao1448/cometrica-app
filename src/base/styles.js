import { createGlobalStyle } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const GlobalStyle = createGlobalStyle`
	body {	
		font-family: 'Open Sans';
		padding: 20px;
		${breakpoint('xs', 'sm')`
			padding: 5px;
		`}
	}
`

