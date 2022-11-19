import { Coffe } from '@app/components/coffe';
import { Header } from '@app/containers/Home/Header';
import { AllCoffes, Title } from './styles';

export const HomeContainer = () => {
  return (
    <>
      <Header />
      <AllCoffes>
        <Title>Nossos cafés</Title>
        <Coffe />
      </AllCoffes>
    </>
  );
};
