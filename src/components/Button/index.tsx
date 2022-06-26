import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import {
    Container,
    Title
} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string,
    color: string,
    size?: string,
    textSize?: string
}

export const Button = ({title, color, size, textSize, ...rest}: ButtonProps) => {
    return(
        <Container {...rest} color={color} size={size}>
            <Title textSize={textSize}>{title}</Title>
        </Container>
    );
}