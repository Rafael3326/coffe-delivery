import { Container, Legend, SubTitle, Title } from './styles';
import coffeImage from '@app/assets/header/Imagem.png';

import yellowCart from '@app/assets/header/yellow-dark-cart.png';
import watch from '@app/assets/header/watch-yellow.png';
import emb from '@app/assets/header/emb.png';
import coffe from '@app/assets/header/coffe-purple.png';

export const Header = () => {
  return (
    <Container>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
        <Legend>
          <div>
            <img src={yellowCart} />
            <p>Compra simples e segura</p>
          </div>
          <div>
            <img src={emb} />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <img src={watch} />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <img src={coffe} />
            <p>O café chega fresquinho até você</p>
          </div>
        </Legend>
      </div>
      <img src={coffeImage} />
    </Container>
  );
};
