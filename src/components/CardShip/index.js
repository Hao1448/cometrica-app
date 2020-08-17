import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { h2, p, p_small } from 'base/mixins/text'

const CardShip = ({link}) => {
    const [ ship, setShip ] = useState([]);

    useEffect(()=> {
        fetch(link)
            .then(res => res.json())
            .then(ship => {
                setShip(ship)
            })
    }, [])
    console.log(ship)
    return (
        <Wrapper>
            <Title>Название {ship.name}</Title>
            <Text>Грузоподъемность{ship.cargo_capacity}</Text>
            <Text>Стоимость{ship.cost_in_credits}</Text>
            <Text>Экипаж {ship.crew}</Text>
            <Text>Рейтинг гипердвигателя {ship.hyperdrive_rating}</Text>
            <Text>Длина {ship.length}</Text>
            <Text>Скорость в атмосфере {ship.max_atmosphering_speed}</Text>
            <Text>Пассажиры {ship.passengers}</Text>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 20px;
    padding: 15px;
    transition: box-shadow 0.2s;
    border: 2px solid ${p => p.theme.color.primary};
    &:hover {
        box-shadow: 0 0 5px 5px  ${p => p.theme.color.primary};
    }
`
const Row = styled.div`
    display: flex;
    align-items: center;
    & + & {
        margin-top: 10px;
    }
`
const Title = styled.div`
    ${h2};
`
const UserName = styled.div`
    ${p_small};
    margin-left: 20px;
    color: ${p => p.theme.color.grey};
`
const Text = styled.div`
    ${p};
`

export default CardShip
