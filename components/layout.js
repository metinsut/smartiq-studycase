import Header from './header/Header';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global.style';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
