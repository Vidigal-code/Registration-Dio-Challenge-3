import { useNavigate  } from "react-router-dom";
import { MdEmail } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, Link, SubtitleRecoverDesc, RowRecoverDesc, RecoverText } from './styles';
import { IformData } from "./types";


const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  })
  .required();

const RecoverPassword = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        reValidateMode: "onChange",   
     });

    const onSubmit = async (formData: IformData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido');
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>+1.000.000 mil devs já estão programando o futuro e desenvolvendo suas carreiras com a DIO. Vem com a gente!</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Esqueci minha senha</TitleLogin>
                <SubtitleLogin>Calma! Vamos ajudar você com isso. :)</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail cadastrado" leftIcon={<MdEmail/>} name="email"  errorMessage={errors.email?.message} control={control} />
                    <Button title="RECUPERAR SENHA" variant="secondary" type="submit"/>
                </form>
                <Row>
                <SubtitleRecoverDesc>Ainda não tem uma conta gratuíta?</SubtitleRecoverDesc>
                </Row>
                <RowRecoverDesc>
                        <RecoverText><Link href="/registration">
                       Criar Conta</Link></RecoverText>
                     </RowRecoverDesc>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { RecoverPassword }