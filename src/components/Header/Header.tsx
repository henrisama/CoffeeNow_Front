import { useState } from "react";
import Link from "next/link";
import { useTheme } from "styled-components";
import { useShop } from "../../hooks/useShop";

import { IoCart } from "react-icons/io5";

import { 
  MainDiv, 
  SubDiv,
  Logo,
  Notification,
  NotificationValue,
} from "./styles";



const Header = () => {
  const [logoHover, setLogoHover] = useState(false);
  const [iconHover, setIconHover] = useState(false);

  const theme = useTheme();
  const { quantityItens } = useShop();

  return (
    <MainDiv>
      <SubDiv>
        <Link href="/">
          <div
            onMouseEnter={() => setLogoHover(true)} 
            onMouseLeave={() => setLogoHover(false)}
            style={{
              cursor: "pointer"
            }}
          >
            { logoHover ? 
              <Logo src='LogoHover.png'/>
            :
              <Logo src='Logo.png'/>
            }
          </div>
        </Link>
      </SubDiv>
      <SubDiv>
        <Link href="/order">Products</Link>
        <Link href="#">About Us</Link>
      </SubDiv>
      <SubDiv>
        <Link href="/products">
          <div
            onMouseEnter={() => setIconHover(true)} 
            onMouseLeave={() => setIconHover(false)}
          >
            <IoCart size={32} cursor='pointer' color={
              iconHover ? theme.colors.brow._700 : theme.colors.basic.white
            }/>
            {quantityItens > 0 &&
              <Notification>
                <NotificationValue>{quantityItens}</NotificationValue>
              </Notification>
            }
          </div>
        </Link>
      </SubDiv>
    </MainDiv>
  );
}

export default Header;