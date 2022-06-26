import { 
  Container,
  Preview,
  PreviewWrapper,
  Info,
  InfoProduct,
  Type,
  Size,
  Total,
  TotalTitle,
  TotalValue,
  Quantity,
 } from "./styles";

 import { typeCoffee, sizeCoffee} from '../../utils/typeCoffee';
 import { previewMockup } from '../../services/previewMockup';
import { useState } from "react";
import { useEffect } from "react";

 interface ProductCardProps{
  idType: number,
  idSize: number,
  quantity: number
}


const ProductCard = ({idType, idSize, quantity}: ProductCardProps) => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');

  function calculateTotal(){
    const typePrice = typeCoffee.find(item => item.id === idType).price;
    const sizePrice = sizeCoffee.find(item => item.id === idSize).price;
    return (typePrice + sizePrice) * quantity;
  }

  useEffect(() => {
    const typeTitle = typeCoffee.find(item => item.id === idType);
    if(typeTitle){
      setType(typeTitle.title);
    }
    const sizeTitle = sizeCoffee.find(item => item.id === idSize);
    if(sizeTitle){
      setSize(sizeTitle.title);
    }
  }, [])

  return (
    <Container>
      <PreviewWrapper type={idType}>
        <Preview src={previewMockup(type, size)}/>
      </PreviewWrapper>
      <Info>
        <InfoProduct>
          <div>
            <Type>{type}</Type>
            <Size>{size}</Size>
          </div>
          <Quantity>
            {quantity}
          </Quantity>
          
        </InfoProduct>
        <Total>
          <TotalTitle>
            Total
          </TotalTitle>
          <TotalValue>
            U$ {calculateTotal()}.00
          </TotalValue>
        </Total>
      </Info>
    </Container>
  )
}

export default ProductCard;