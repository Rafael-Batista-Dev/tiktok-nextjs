import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "./styles";

import User from "../User";

function Siderbar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User
          user={{
            name: "Rafael Batista",
            username: "Rafa .B",
            avatar:
              "https://media-exp1.licdn.com/dms/image/C4D03AQHmJdDQGfvFHg/profile-displayphoto-shrink_400_400/0/1588864601845?e=1614816000&v=beta&t=AssyzX9oigJU1k7KXFlxe17nafU7dZU8WW3Mu_3aiRI",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Siderbar;
