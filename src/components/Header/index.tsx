import React from 'react';
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Link, Row, Menu, MenuRight, UserPicture} from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <Link href="/"><img src={logo} alt="Logo da dio" /></Link>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/78284112?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <MenuRight href="#">Catálogo</MenuRight>
                <MenuRight href="#">Planos</MenuRight>
                <MenuRight href="#">Para Empresas</MenuRight>
                <Link href="/login">
                <Button  title="Entrar" />
                </Link>
                <Link href="/Registration-Dio-Challenge-3/">
                <Button title="Cadastrar" />
                </Link>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
