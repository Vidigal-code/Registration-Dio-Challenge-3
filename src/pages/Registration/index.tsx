import { useNavigate  } from "react-router-dom";
import {  MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Title, Column, TitleRegistration, SubtitleRegistration, SubtitleRegistrationDesc, LoginText,  Row, RowDesc, Link, Wrapper, } from './styles';
import { IformData } from "./types";


const schema = yup
  .object({
    name:  yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Registration = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        reValidateMode: "onChange",   
     });

    const onSubmit = async (formData: IformData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&nome=${formData.name}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }
            alert('Error ao Registrar');
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleRegistration>Comece agora Grátis</TitleRegistration>
                <SubtitleRegistration>Crie Sua conta e make the change._</SubtitleRegistration>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson/>} name="name"  errorMessage={errors.name?.message} control={control} />
                    <Input placeholder="E-mail" leftIcon={<MdEmail/>} name="email"  errorMessage={errors.email?.message} control={control} />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock/>}  name="senha" errorMessage={errors.password?.message} control={control} />
                    <Button title="Criar Minha Conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                <SubtitleRegistrationDesc>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleRegistrationDesc>
                </Row>
                <RowDesc>
                        <LoginText>Já Tenho Conta. <Link href="/login">
                       Fazer Login</Link></LoginText>
                     </RowDesc>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Registration }