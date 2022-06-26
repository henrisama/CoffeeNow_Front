import styled from 'styled-components';

interface ContainerProps{
    img: string
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
`;

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
   
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Content = styled.div`
    position: absolute;
    right: 7rem;
    bottom: 14rem;
`;


export const Title = styled.h1`
    font-family:  ${({ theme }) => theme.fonts.secondary};
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.brow._200};
    line-height: 2rem;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const TitleLogo = styled.h1`
    font-family:  ${({ theme }) => theme.fonts.logo};
    font-size: 3rem;
    color:  ${({ theme }) => theme.colors.brow._500};
`;

export const SubTitle = styled.h1`
    font-family:  ${({ theme }) => theme.fonts.tercenary} ;
    font-size: 1.5rem;
    color:  ${({ theme }) => theme.colors.brow._300};

    margin-top: 0.5rem ;
    margin-bottom: 0.825rem;
`;
