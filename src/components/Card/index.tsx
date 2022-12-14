import React from 'react';
import { FiThumbsUp } from 'react-icons/fi'
import Bannercard from '../../assets/bannercard.png'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={Bannercard}/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/78284112?v=4"/>
         <div>
          <h4>Kauan Vidigal</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Bootcamp Concluido com Sucesso </h4>
          <p>Concluido o BootCamp da Dio com parceria do Banco Inter!...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript #Typescript #React</h4>
          <p>
            <FiThumbsUp />1000
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
