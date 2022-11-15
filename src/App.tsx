import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/global';
import { defaultTheme } from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
