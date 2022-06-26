import Link from 'next/link';
import { useTheme } from 'styled-components';
import { Button } from '../components/Button';
import Header from '../components/Header/Header';
import {
  Container,
  Content,
  Title,
  Line,
  TitleLogo,
  SubTitle
} from '../styles/index';


export default function Home() {
  const theme = useTheme();
  return (
    <div style={{height: '100vh'}}>
      <Container img='/background.png'>
        <Header />
        <Content>
          <Title>
            Do you like good
          </Title>
          <Line>
            <TitleLogo>Coffee</TitleLogo>
            <Title>
              ?
            </Title>
          </Line>
          <SubTitle>
            So, Welcome to right place! 
          </SubTitle>
          <Link href='/order'><Button 
            title='Order Now' 
            color={theme.colors.red._900}
          /></Link>
        </Content>
      </Container>
    </div>
  )
}
