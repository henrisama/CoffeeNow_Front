import styled from 'styled-components';

interface SelectProps{
    width: string
}


export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    height: calc(100vh - 46px - 1rem) ;
    display: flex;
    flex-direction: row;
`;

export const HalfDiv = styled.div`
    width: 50%;
    display: flex; 
    flex-direction: column;
    :nth-child(1){
        padding: 3rem;
    }
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    color:  ${({ theme }) => theme.colors.brow._700} ;
`;

export const PricingTable = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10rem;
`;

export const PricingTitle = styled.h3`
    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.brow._300} ;
    margin: 1rem 0 0.5rem 0;
`;

export const CoffeeTypes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Types = styled.div`
    width: 11.5rem;
    display:  flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
`;

export const Value = styled.h4`
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    margin-top: 8rem;
`;

export const CoffeSelect = styled.select<SelectProps>`
    width:  ${({ width }) => width};
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 0px;
    border-bottom: 2px solid  ${({ theme }) => theme.colors.brow._500};

    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;

export const CoffeeOptions = styled.option`

`;

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 12rem ;
`;

export const TotalTitle = styled.h2`
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;

export const TotalValue = styled.h2`
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.brow._500};
`;

export const Options = styled.div`
    display:  flex;
    flex-direction: row ;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    margin-top: 1rem;
`;

export const PreviewContainer = styled.div`
    background-image: url('/productBackground.png');
    height: 100%;
    background-size: cover ;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Preview = styled.img`
    width: 200px;
    margin-left: 6rem;
`;
