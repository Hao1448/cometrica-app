import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const h = ({ theme }) => css`
    line-height: 1.15;
    margin: 30px 0 0;
    letter-spacing: .1rem;
    &:first-child {
        margin-top: 0;
    }
`

const h1 = ({ theme }) => css`
    ${h};
    font-size: 64px;
    font-weight: 700;
    ${breakpoint('xs', 'sm')`
        font-size: 44px;
    `}
`

const h2 = ({ theme }) => css`
    ${h};
    font-size: 24px;
`

const p = ({ theme }) => css`
    font-size: 18px;
`


export {
    h1,
    h2,
    p
}