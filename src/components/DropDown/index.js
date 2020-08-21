import React from 'react'
import styled, { withTheme } from 'styled-components'
import { h2 } from 'base/mixins/text'
import { UiIcon } from 'components'
import dropdown from 'base/icons/icn_arrow.svg'

const DropDown = ({ theme, ships = [], onChange }) => {
    return (
        <Wrapper>
            <Select onChange={onChange}>
                {
                    ships.map(ship => (
                        <option
                            key={ship.name}
                            value={ship.name}
                        >
                            {ship.name}
                        </option>))
                }
            </Select>
            <Arrow>
                <UiIcon
                    src={dropdown}
                    width="12px"
                    height="20px"
                    color={theme.color.blue}
                />
            </Arrow>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
`

const Select = styled.select`
    ${h2};
    appearance: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid grey;
    transition: border-color .2s;
    font-family: ${p => p.theme.fonts.primary};
    &:hover, &:active {
        border: 2px solid ${p => p.theme.color.blue};
    }
    &:focus {
        outline: none;
    }
`

const Arrow = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    right: 5%;
    margin-top: -8px;
    transform: rotate(90deg);
`
export default withTheme(DropDown)