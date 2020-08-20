import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardShip, DropDown } from 'components'

const WidgetCards = () => {
    const [ ships, setShips ] = useState()
    const [ mainShip, setMainShip ] = useState();
    const [ secondaryShip, setSecondaryShip ] = useState();

    useEffect(()=> {
        fetch("https://swapi.dev/api/films/2").then(res => res.json())
            .then(film => {
                const starships = film.starships
                return Promise.all(starships.map(ship => fetch(ship).then(res => res.json())))
            })
            .then(data => 
                setShips(data)
            )         
    }, [])
    
    if(!ships) {
        return 'Loading...'
    }

    const mainShipObject = ships.find(item=>item.name === (mainShip || ships[0].name))
    const secondaryShipObject = ships.find(item=>item.name === (secondaryShip || ships[0].name))
    
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <DropWrapper>
                        <DropDown ships={ships} onChange={(e) => setMainShip(e.target.value)} />
                    </DropWrapper>
                    <DropWrapper>
                        <DropDown ships={ships} onChange={(e) => setSecondaryShip(e.target.value)} />
                    </DropWrapper>
                    {mainShipObject &&
                        <Card className="mainCard">
                            <CardShip
                                mode="main"
                                ship={mainShipObject}
                            />
                        </Card>
                    }
                    {
                        secondaryShipObject &&
                        <Card className="secondaryCard">
                            <CardShip
                                mode={mainShipObject ? "secondary" : "main"}
                                ship={secondaryShipObject}
                                mainShip={mainShipObject}
                            />
                        </Card>
                    }
                </Grid>                
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0;
`
const DropWrapper = styled.div`
    grid-column: span 3;
    &:first-child {
        grid-column: 4 / span 3;
        ${breakpoint('xs', 'sm')`
            grid-column:  span 12;
        `}
    }
    ${breakpoint('xs', 'sm')`
        grid-column:  span 12;
    `}
`
const Card = styled.div`
    grid-row: 2;
    &.mainCard {
        grid-column: 3 / span 4;
        ${breakpoint('xs', 'sm')`
            grid-row: 3;
            grid-column:  span 12;
        `}
    }
    &.secondaryCard {
        grid-column: 7 / span 4;
        ${breakpoint('xs', 'sm')`
            grid-row: 4;
            grid-column:  span 12;
        `}
    }
    
   
`

export default WidgetCards