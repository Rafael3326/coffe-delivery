import { Container, Localization } from './styles';
import logoCoffe from '@app/assets/header/logo.png';
import cart from '@app/assets/header/Cart.png';
import chechpoint from '@app/assets/header/Icon.png';
export const NavBar = () => {
  return (
    <Container>
      <div>
        <img src={logoCoffe} />
        <div>
          <Localization>
            <img src={chechpoint} />
            <span>Porto Alegre, RS</span>
          </Localization>
          <img src={cart} />
        </div>
      </div>
    </Container>
  );
};
