import React  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}
Container.propTypes = {
    children: PropTypes.node
}
const Wrapper = styled.div`
    max-width: 1182px;
    margin: 0 auto;
`

export default Container