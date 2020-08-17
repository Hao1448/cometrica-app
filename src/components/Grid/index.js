import React  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Grid = ({ children, align, justify, gap }) => {
    return (
        <Wrapper
            align={align}
            justify={justify}
            gap={gap}
        >
            {children}
        </Wrapper>
    )
}

Grid.propTypes = {
    children: PropTypes.node,
    align: PropTypes.string,
    justify: PropTypes.string,
    gap: PropTypes.string,
}

const Wrapper = styled.div`
    height: 100%;
    display: grid;
    align-items: ${p => p.align || 'flex-start'};
    justify-content: ${p => p.justify || 'flex-start'};
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${p => p.gap || '20px'};
`

export default Grid