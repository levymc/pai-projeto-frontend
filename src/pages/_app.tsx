import NavBar from '@/components/NavBar';
import { AppProvider } from '@/contexts/AppContext';
import styled from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Container>
  );
}

export default MyApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 10em;
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(var(--background-start-rgb), 1),
      rgba(var(--callout-rgb), 0.5)
    );
`
