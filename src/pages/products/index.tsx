import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard";
import { useShop } from "../../hooks/useShop";
import { api } from "../../services/api";
import { 
  Container, 
  Title,
  ProductsCards,
  Content,
  Footer,
  Total,
  TotalTitle,
  TotalValue,
} from "../../styles/products";

const Products = () => {

  const theme = useTheme();
  const { itens, total, finish} = useShop();
  const route = useRouter();

  async function finishSale(){
    try{
      await finish();
    }catch{
      alert('Não foi possível processar sua informação nesse momento, Tente Novamente mais tarde!')
    }
    route.push('/');
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Your Products</Title>
        <ProductsCards>
          {
            itens.map((item, index) => 
              <ProductCard key={index} idType={item.typeCoffeeId} idSize={item.sizeCoffeeId} quantity={item.quantity}/>
            )
          }
        </ProductsCards>
        <hr className="solid" color={theme.colors.brow._300}/>
        <Footer>
          <Total>
            <TotalTitle>Total:</TotalTitle>
            <TotalValue>U$ {total}.00</TotalValue>
          </Total>
          <Button 
            title="Buy Now" 
            color={theme.colors.red._900} 
            textSize="1.5rem" 
            size="25rem"
            onClick={finishSale}
          />
        </Footer>
      </Content>
    </Container>
  )
}

export default Products;