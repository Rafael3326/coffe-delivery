import 'styled-components';
import { defaultTheme } from '../theme/theme';
// importo o theme com seu tipo inferido pelo typescript
type ThemeType = typeof defaultTheme;

// subtraio a tipagem do thema e o coloco em um type

declare module 'styled-components' {
  //"sobrescrevo" uma tipagem default do styled componentes extendendo a tipagem do meu theme
  export interface DefaultTheme extends ThemeType {}

  // agora quando for usar o theme dentro do styles eu terei o autocomplete visto que o theme la estara tipado
}
