import React from 'react';
import styled from 'styled-components'
import { h2, p } from 'base/mixins/text'

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
                    <Delta className='plus'>
                        {`(+${new Intl.NumberFormat('ru-RU').format(delta/100)})`}
                    </Delta>
                )
            }
            if(delta < 0) {
                return (
                    <Delta className='minus'>
                        {`(${new Intl.NumberFormat('ru-RU').format(delta/100)})`}
                    </Delta>
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
                Object.keys(fields).map(field => (
                    <Text key={field}>
                        <Name>{fields[field]}</Name>
                        <Feature>
                            {ship[field] + ' '}
                            {secondaryFlag && compare(ship, mainShip, field)}
                        </Feature>
                    </Text>
                    ))
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 20px;
    padding: 15px;
    transition: box-shadow .2s;
    border: 2px solid ${p => p.theme.color.grey};
    &:hover {
        box-shadow: 0 0 5px 5px  ${p => p.theme.color.blue};
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
`
const Name = styled.div`

`
const Feature = styled.div`
    text-align: right;
`

const Delta = styled.div`
    &.plus {
        color: ${p => p.theme.color.green}
    }
    &.minus {
        color: ${p => p.theme.color.red}
    }
`
export default CardShip
