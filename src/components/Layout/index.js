import Header from '../Header';
import Siderbar from '../Siderbar';
import Footer from '../Footer';
import { Container, SidebarContainer, ContentContainer } from './styles';

function Layout({children}) {
  return (
    <>
      <Header/>
      <Container>
        <SidebarContainer>
          <Siderbar></Siderbar>
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
      <Footer/>
    </>
  );
}

export default Layout;