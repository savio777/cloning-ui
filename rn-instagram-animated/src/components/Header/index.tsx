import React from "react";

import { Container, Content, LogoHeader } from "./styles";

const Header: React.FC = () => (
  <Container>
    <Content />
    <Content center>
      <LogoHeader />
    </Content>
    <Content />
  </Container>
);

export default Header;
