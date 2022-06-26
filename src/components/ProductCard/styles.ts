import styled, { css } from 'styled-components';

interface PreviewProps{
    type: number
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;


export const PreviewWrapper = styled.div<PreviewProps>`
    width: 8rem;
    height: 8rem;

    border-radius: 50%;
    ${ ({type}) => type === 1 ? css`
            background-image: radial-gradient(rgba(111, 29, 27, 1) 10%, rgba(111, 29, 27, .75) 40%, rgba(111, 29, 27, .0) 60%); 
        ` :
        type === 2 ? css`
            background-image: radial-gradient(rgba(153, 88, 42,1) 10%, rgba(153, 88, 42, .75) 40%, rgba(153, 88, 42, .0) 60%); 
        ` :
        type === 3 ? css`
            background-image: radial-gradient(rgba(255, 230, 167, 1) 10%, rgba(255, 230, 167, .75)  40%, rgba(255, 230, 167, .0)  60%); 
        ` : css`
            background-image: radial-gradient(rgba(67, 40, 24, 1) 10%, rgba(67, 40, 24, .75) 40%, rgba(67, 40, 24, .0) 60%); 
        `
    }
    
    display: flex;
    align-items: center;
    justify-content: center ;
`;

export const Preview = styled.img`
  width: 50px;
  height: auto;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;


export const InfoProduct = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between ;
`;

export const Type = styled.h3`
    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;

export const Size = styled.h3`
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.brow._500};
`;

export const Total = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between ;
`;


export const TotalTitle = styled.h3`
    font-size: 0.875rem;
    color:  ${({ theme }) => theme.colors.brow._300};
`;

export const TotalValue = styled.h3`
    font-size: 0.875rem;
    color:  ${({ theme }) => theme.colors.brow._300};
`;

export const Quantity = styled.h3`
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.brow._700};
`;
