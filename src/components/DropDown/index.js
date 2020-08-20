import React from 'react'
import styled from 'styled-components'
import { h2 } from 'base/mixins/text'

const DropDown = ({ ships = [], onChange }) => {
    return (
        <Wrapper onChange={onChange}>
            {
                ships.map(ship => (
                    <option
                        key={ship.name}
                        value={ship.name}
                    >
                        {ship.name}
                    </option>))
            }
        </Wrapper>
    )
}

const Wrapper = styled.select`
    ${h2};
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid grey;
    transition: border-color .2s;
    &:hover, &:active {
        border: 2px solid ${p => p.theme.color.blue};
    }
    &:focus {
        outline: none;
    }
`
export default DropDown