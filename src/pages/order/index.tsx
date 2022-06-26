import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import Header from "../../components/Header/Header";
import { NamePrice } from "../../components/NamePrice";
import QuantitySelector from "../../components/QuantitySelector";
import { useShop } from "../../hooks/useShop";
import { api } from "../../services/api";
import { previewMockup } from "../../services/previewMockup";
import { sizeCoffee, typeCoffee } from "../../utils/typeCoffee";

import {
  Container, 
  Content,
  Title,
  PricingTable,
  PricingTitle,
  CoffeeTypes,
  Types,
  Value,
  Form,
  CoffeSelect,
  CoffeeOptions,
  Total,
  TotalTitle,
  TotalValue,
  Options,
  PreviewContainer,
  HalfDiv,
  Preview
 } from "../../styles/order";


const OrderPage = () => {
  const [selectedTypeCoffee, setSelectedTypeCoffee] = useState<typeof typeCoffee[0]>(typeCoffee[0]);
  const [selectedSizeCoffee, setSelectedSizeCoffee] = useState<typeof sizeCoffee[0]>(sizeCoffee[0]);
  const [typeData, setTypeData] = useState<typeof typeCoffee>([]);
  const [sizeData, setSizeData] = useState<typeof sizeCoffee>([]);

  const [quantity, setQuantity] = useState(1);

  const theme = useTheme();
  const route = useRouter();
  const { quantityItens, addItem } = useShop();

  function calculateTotal(){
    const total = (selectedTypeCoffee.price + selectedSizeCoffee.price) * quantity;
    return "U$ "+ total+ '.00';
  }

  function handleSelectTypeCoffee(id: string){
    const typeC = typeCoffee.find(type => type.id === Number(id));
    if(typeC)
      setSelectedTypeCoffee(typeC);
  }

  function handleSelectSizeCoffee(id: string){
    const sizeC = sizeCoffee.find(size => size.id === Number(id));
    if(sizeC)
      setSelectedSizeCoffee(sizeC);
  }

  function handleSubmit(e: FormEvent){
    e.preventDefault();
  }

  function addToCart(){
    const product = {
      typeCoffeeId: selectedTypeCoffee.id,
      sizeCoffeeId: selectedSizeCoffee.id,
      quantity
    }
    addItem(product);
  }

  function goToCart(){
    route.push('/products')
  }

  async function getData(){
    const types = await api.get('/types');
    const sizes = await api.get('/sizes');
    setTypeData(types.data);
    setSizeData(sizes.data);
  }

  useEffect(() => {
    getData();
  }, []) 

  return(
    <Container>
      <Header />

      <Content>{/* content */}
        <HalfDiv>
          <Title>WHAT DO YOU WANT TODAY ?</Title>
          <PricingTitle>Pricing</PricingTitle>
          <PricingTable>
            <CoffeeTypes>
              {
                typeData.map(type => 
                  <Types key={type.id}>
                    <Value>{type.title}</Value>
                    <Value>U$ {type.price}.00</Value>
                  </Types>
                )
              }
              
            </CoffeeTypes>
            <CoffeeTypes>
              {
                sizeData.map(size => 
                  <Types key={size.id}>
                    <Value>{size.title} ({size.size})</Value>
                    <Value>{size.price === 0 ? 'Incluse' : '+U$ '+size.price+'.00'}</Value>
                  </Types>  
                )
              }
            </CoffeeTypes>
          </PricingTable>
          <Form onSubmit={handleSubmit}>
            <CoffeSelect 
              width="70%"
              onChange={ e => handleSelectTypeCoffee(e.target.value)}
            >
              {
                typeData.map(type => 
                  <CoffeeOptions value={type.id} key={type.id}>
                    {type.title}
                  </CoffeeOptions>  
                )
              }
            </CoffeSelect>
            <CoffeSelect 
              width="30%"
              onChange={ e => handleSelectSizeCoffee(e.target.value)}
            >
              {
                sizeData.map(size => 
                  <CoffeeOptions value={size.id} key={size.id}>
                    {size.title}
                  </CoffeeOptions>
                )
              }
            </CoffeSelect>
            <QuantitySelector value={quantity} setValue={setQuantity}/>
          </Form>
          
          <Total>
            <TotalTitle>Total:</TotalTitle>
            <TotalValue>{calculateTotal()}</TotalValue>
          </Total>
          <Options>
            <Button 
              title={`Add to Cart (${quantityItens})`}
              color={theme.colors.red._900} 
              size="70%"
              textSize="1.5rem"
              onClick={addToCart}
            />
            <Button 
              title="Go to Cart" 
              color={theme.colors.brow._200} 
              size="30%"
              textSize="1.5rem"
              onClick={goToCart}
            />
          </Options>
          
        </HalfDiv>
        <HalfDiv>
          <PreviewContainer>
            <Preview src={`/${previewMockup(selectedTypeCoffee.title, selectedSizeCoffee.title)}`}  alt={previewMockup(selectedTypeCoffee.title, selectedSizeCoffee.title)}/>
          </PreviewContainer>
        </HalfDiv>
      </Content>
      
    </Container>
  )
}

export default OrderPage;