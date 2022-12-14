import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, Link } from './styles';
import { IformData } from "./types";


const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        reValidateMode: "onChange",   
     });

    const onSubmit = async (formData: IformData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
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
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail/>} name="email"  errorMessage={errors.email?.message} control={control} />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock/>}  name="senha" errorMessage={errors.password?.message} control={control} />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                <Link href="/recoverPassword"><EsqueciText>Esqueci minha senha</EsqueciText></Link>
                    <Link href="/Registration-Dio-Challenge-3/"><CriarText>Criar Conta</CriarText></Link>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }