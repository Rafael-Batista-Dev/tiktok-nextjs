import { Avatar, Container, Content, Icon, Logo, LogoContainer, LogoIcon, OptionsContainer } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon></Icon>
          <Avatar>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHmJdDQGfvFHg/profile-displayphoto-shrink_400_400/0/1588864601845?e=1614816000&v=beta&t=AssyzX9oigJU1k7KXFlxe17nafU7dZU8WW3Mu_3aiRI" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;