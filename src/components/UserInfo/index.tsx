import React from 'react'

import { Container, NameText, Progress, UserPicture} from './styles';
import { Iuserinfo } from './types';

const UserInfo = ({nome,image, percentual} : Iuserinfo) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }