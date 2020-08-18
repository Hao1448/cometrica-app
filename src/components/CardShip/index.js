import React from 'react';
import styled from 'styled-components'
// import { h2, p } from 'base/mixins/text'

const CardShip = (ship) => {
    return (
        <Wrapper>
            {/* <Title>{ship.name}</Title>
            <Text>Грузоподъемность {ship.cargo_capacity}</Text>
            <Text>Стоимость {ship.cost_in_credits}</Text>
            <Text>Экипаж {ship.crew}</Text>
            <Text>Рейтинг гипердвигателя {ship.hyperdrive_rating}</Text>
            <Text>Длина {ship.length}</Text>
            <Text>Скорость в атмосфере {ship.max_atmosphering_speed}</Text>
            <Text>Пассажиры {ship.passengers}</Text> */}
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

// const Title = styled.div`
//     ${h2};
// `
// const Text = styled.div`
//     ${p};
//     margin-top: 15px;
// `

export default CardShip
