import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardShip } from 'components'

const WidgetCards = () => {
    const [ ships, setShips ] = useState()

    useEffect(()=> {
        fetch("https://swapi.dev/api/films/2").then(res => res.json())
            .then(film => {
                const starships = film.starships //Ссылки на данные конкретных объектов
                return Promise.all(starships.map(ship => fetch(ship).then(res => res.json())))
            })
            .then(data => 
                setShips(data)
            )         
    }, [])
    
    if(!ships) {
        return 'Loading...'
    }
    return (
        <Wrapper>
            <Container>
                <Grid >
                    {
                        ships.map((ship) => {
                            return (
                                <Card key={ship.created}>
                                    <CardShip ship={ship}/>
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

export default WidgetCards