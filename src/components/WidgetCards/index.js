import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardShip } from 'components'

const DropDown = ({ships = [], onChange}) => {
    return (<select onChange={onChange}>
        {
            ships.map(ship => (<option
                key={ship.name}
                value={ship.name}
            >{ship.name}</option>))
        }
    </select>)
}

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
                <DropDown ships={ships} onChange={(e) => setMainShip(e.target.value)} />
                <DropDown ships={ships} onChange={(e) => setSecondaryShip(e.target.value)} />
                <Grid >
                    {mainShipObject &&
                    <Card>
                        <CardShip
                            mode="main"
                            ship={mainShipObject}
                        />
                    </Card>
                    }
                    {
                        secondaryShipObject &&
                        <Card>
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

const Card = styled.div`
    grid-column: span 3;
    ${breakpoint('xs', 'sm')`
        grid-column:  2 / span 10;
    `}
`

export default WidgetCards