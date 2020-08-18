import React  from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
    max-width: 1182px;
    margin: 0 auto;
`

export default Container