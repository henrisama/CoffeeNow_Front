import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    color:  ${({ theme }) => theme.colors.brow._700} ;
`;

export const Content = styled.div`
    padding: 3rem;

    display: flex;
    flex-direction: column ;
`;

export const ProductsCards = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    flex-wrap: wrap;
    gap: 4rem;
`;

export const Footer = styled.div`
    width: 25rem;
    align-self: flex-end;
    margin-top: 1rem;
`;

export const Total = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-bottom: 1rem;
`;

export const TotalTitle = styled.h2`
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;

export const TotalValue = styled.h1`
    font-size: 4rem;
    color:  ${({ theme }) => theme.colors.brow._300};
`;
