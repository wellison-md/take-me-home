import banner1 from "../../../assets/heroBanners/banner1.jpg";
import { HeroContainer } from "./heroStyle";

export default function Hero() {
  return (
    <HeroContainer>
      <img src={ banner1 } alt="" />
    </HeroContainer>
  );
}
