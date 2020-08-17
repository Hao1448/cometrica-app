import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardShip } from 'components'
import { h2 } from 'base/mixins/text'

const WidgetCards = () => {
    const [ ships, setShips ] = useState([]);

    useEffect(()=> {
        fetch("https://swapi.dev/api/films/2")
            .then(res => res.json())
            .then(film => {
                const starships = film.starships
                setShips(starships)
            })
    }, [])
 
    if(!ships) {
        return 'Loading...'
    }

    return (
        <Wrapper>
            <Container>
                <Grid >
                    {
                        ships.map((link) => {
                            return (
                                <Card key={link}>
                                    <CardShip link={link}/>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0;
`

const Card = styled.div`
    grid-column: span 4;
    ${breakpoint('xs', 'sm')`
        grid-column:  2 / span 10;
    `}
`
const Input = styled.input`
    ${h2};
    padding: 10px;
    grid-row: 1;
    grid-column: 4 / span 6;
    border-radius: 10px;
    border: 1px solid ${p => p.theme.color.primary};
    color: ${p => p.theme.color.black};
    &:hover, &:focus, &:active {
        outline: none;
    }
    ${breakpoint('xs', 'sm')`
        grid-column:  2 / span 10;
    `}
`

export default WidgetCards