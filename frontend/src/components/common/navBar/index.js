import { Link, NavbarContainer } from "./navbarStyle";

export default function NavBar() {
  return (
    <NavbarContainer>
      <Link>Início</Link>
      <Link>Pets</Link>
      <Link>Contato</Link>
      <Link>Login</Link>
    </NavbarContainer>
  );
}
