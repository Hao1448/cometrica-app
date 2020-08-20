import React from 'react';
import styled, { ThemeProvider} from 'styled-components'
import { GlobalTheme } from 'base/theme'
import { GlobalStyle } from 'base/styles'
import { WidgetCards } from 'components'
import { h1} from 'base/mixins/text'

export default function App() {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <GlobalStyle/>
            <Wrapper>
                <Title>Cometrica App</Title>
                <WidgetCards/>
            </Wrapper>    
        </ThemeProvider>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    ${h1};
`
