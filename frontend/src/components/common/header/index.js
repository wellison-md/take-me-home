import NavBar from "../navBar";
import { HeaderContainer, Logo } from "./headerStyle";
import tmhicon from "../../../assets/tmhicon.png";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={ tmhicon } alt='take me home icon' />
      <NavBar />
    </HeaderContainer>
  );
}
