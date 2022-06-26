import styled from 'styled-components';
import {darken} from 'polished'

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonLess = styled.button`
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 5px 0 0 5px;

    background-color:  ${({ theme }) => theme.colors.red._900} ;

    &:active{
        background-color:  ${({ theme }) => darken(0.1, theme.colors.red._900)};
    }
    z-index: 9;
`;

export const ButtonTitle = styled.h3`
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.brow._200};
`;


export const Total = styled.div`
    width: 2rem;
    height: 1.5rem;
    background-color:  ${({ theme }) => theme.colors.brow._200};

    display:flex ;
    align-items: center;
    justify-content: center;
`;

export const TotalValue = styled.h3`
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;

export const ButtonMore = styled.button`
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 0 5px 5px 0;

    background-color:  ${({ theme }) => theme.colors.brow._500} ;
    &:active{
        background-color:  ${({ theme }) => darken(0.1, theme.colors.brow._500)};
    }

    z-index: 9;
`;
