import React from 'react';
import styled from 'styled-components'
import { h2, p } from 'base/mixins/text'

// const compare = (ship, mainShip, field) => {
//     const shipValue = Math.round(ship[field].replace(',','') * 100);
//     const mainShipValue = Math.round(mainShip[field].replace(',','') * 100);
//     let delta = null;
//     if(!Number.isNaN(shipValue) && !Number.isNaN(mainShipValue)) {
//         delta = shipValue - mainShipValue;
//         if(delta === 0) {
//             return '';
//         }
//         if(delta > 0) {
//             return (
//                 <span style={{color:'green'}}>
//                     {`(+${delta/100})`}
//                 </span>
//             )
//         }
//         if(delta < 0) {
//             return (
//                 <span style={{color:'red'}}>
//                     {`(${delta/100})`}
//                 </span>
//             )
//         }
//     } else {
//         return '';
//     }
// }

const CardShip = ({ship, mode, mainShip}) => {

    const secondaryFlag = (mode === 'secondary')

    const fields = {
        cargo_capacity: 'Грузоподъемность',
        cost_in_credits: 'Стоимость',
        crew: 'Экипаж',
        hyperdrive_rating: 'Рейтинг гипердвигателя',
        length: 'Длина',
        max_atmosphering_speed: 'Скорость в атмосфере',
        passengers: 'Пассажиры'
    }

    const compare = (ship, mainShip, field) => {
        const shipValue = Math.round(ship[field].replace(',','') * 100);
        const mainShipValue = Math.round(mainShip[field].replace(',','') * 100);
        let delta = null;
        if(!Number.isNaN(shipValue) && !Number.isNaN(mainShipValue)) {
            delta = shipValue - mainShipValue;
            if(delta === 0) {
                return '';
            }
            if(delta > 0) {
                return (
                    <span style={{color:'green'}}>
                        {`(+${delta/100})`}
                    </span>
                )
            }
            if(delta < 0) {
                return (
                    <span style={{color:'red'}}>
                        {`(${delta/100})`}
                    </span>
                )
            }
        } else {
            return '';
        }
    }
    
    return (
        <Wrapper>
            <Title>{ship.name}</Title>
            {
                Object.keys(fields).map(field => (<Text key={field}>
                    <div style={{fontSize: '1em'}}>{fields[field]}</div>
                    {ship[field]+' '}
                    {secondaryFlag && compare(ship, mainShip, field)}
                </Text>))
            }
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

const Title = styled.div`
    ${h2};
`
const Text = styled.div`
    ${p};
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    min-height: 70px;
    border: 1px solid #eee;
`

export default CardShip
