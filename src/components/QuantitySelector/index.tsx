import React from 'react';

import {
    Container,
    ButtonLess,
    ButtonTitle,
    Total,
    TotalValue,
    ButtonMore,
} from './styles';

interface QuantitySelectorProps{
    value: number,
    setValue: (newValue: number) => void
}

const QuantitySelector = ({value, setValue}: QuantitySelectorProps) => {
    
    function handleLess(){
        if(value >1 )
            setValue(value-1);
    }

    function handleMore(){
        setValue(value+1);
    }
    return(
        <Container>
            <ButtonLess onClick={handleLess}>
                <ButtonTitle>-</ButtonTitle>
            </ButtonLess>
            <Total>
                <TotalValue>{value}</TotalValue>
            </Total>
            <ButtonMore onClick={handleMore}>
                <ButtonTitle>+</ButtonTitle>
            </ButtonMore>
        </Container>
    );
}
export default QuantitySelector;