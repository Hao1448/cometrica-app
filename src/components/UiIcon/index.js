import React from 'react'
import styled from 'styled-components'

const UiIcon = ({
    className,
    src,
    width,
    height,
    color,
}) => {
    return (
        <Icon
            className={className}
            src={src}
            width={width}
            height={height}
            color={color}
        />
    )
}

const Icon = styled.div`
    mask: url(${props => props.src});
    -webkit-mask-size: cover;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color};
`

export default UiIcon