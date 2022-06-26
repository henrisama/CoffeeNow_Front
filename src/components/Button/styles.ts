import styled from 'styled-components';

interface ButtonProps{
    color: string,
    size?: string
}

interface TitleProps{
    textSize?: string
}

export const Container = styled.button<ButtonProps>`
    width:  ${({ size }) => size};
    background-color:  ${({ color }) => color};

    padding: 0.5rem;

    border-radius: 5px;
`;

export const Title = styled.h1<TitleProps>`
    font-family:  ${({ theme }) => theme.fonts.secondary};
    font-size:  ${({ textSize }) => textSize ? textSize : '0.825rem'};
    color:  ${({ theme }) => theme.colors.basic.white}
`;
