import { css } from 'styled-components'


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
    font-size: 54px;
    font-weight: 600;
`

const h2 = ({ theme }) => css`
    ${h};
    font-weight: 500;
    font-size: 24px;
`

const p = ({ theme }) => css`
    font-size: 18px;
`
const p_small = ({ theme }) => css`
    font-size: 16px;
`


export {
    h1,
    h2,
    p,
    p_small
}