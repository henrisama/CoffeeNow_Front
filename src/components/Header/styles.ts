import styled from "styled-components";
import Link from "next/link";

export const MainDiv = styled.div`
  width: 100%;

  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.brow._500};
`;

export const SubDiv = styled.div`
  color: ${(props) => props.theme.colors.basic.white};

  a {
    margin-right: 20px;
    font-size: 1.25rem;
    &:hover {
      color: ${({ theme }) => theme.colors.brow._700};
    }
  }
`;

export const Logo = styled.img`
  height: 46px;
  width: auto;
`;

export const Notification = styled.div`
  width: 1rem;
  height: 1rem;

  background-color: ${({ theme }) => theme.colors.red._900};

  border-radius: 50%;

  position: relative;
  margin-top: -1rem;
  top: -1.5rem;
  right: -1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationValue = styled.h6`
  color: ${({ theme }) => theme.colors.brow._200};
`;
