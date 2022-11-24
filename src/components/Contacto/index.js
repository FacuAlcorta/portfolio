import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, FormContent, Form, FormH1, FormInput, FormLabel, FormWrapper, NavLogo, FormInputText, FormButton } from './ContactoElements'
import { ImgLogo } from '../Navbar/NavbarElements';
import { IoMdPaper, IoMdAt, IoIosContact, IoIosArrowForward, IoMdTrendingUp } from "react-icons/io";


const Contacto = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
      console.log(data);
  }

  return (
    <>
    <Container>
        <FormWrapper>
            <NavLogo to="/"offset={-80}><ImgLogo src={require(`../../images/marca-png.png`)}/></NavLogo>
            <FormContent>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormH1>Contactame</FormH1>
                    <FormLabel>Nombre Completo <IoIosContact/></FormLabel>
                    <FormInput type='text' maxLength={25} {...register('nombre completo', {
                    required: true
                    })}
                    />
                    {errors.nombre?.type === 'required'}
                    <FormLabel><div>Email</div><IoMdAt/></FormLabel>
                    <FormInput type='email' {...register('email', {
                    required: true
                    })}
                    />
                    {errors.email?.type === 'required'}
                    <FormLabel><div>Ingresá tu mensaje</div><IoMdPaper/></FormLabel>
                    <FormInputText type='text' maxLength={450} {...register('mensaje', {
                    required: true
                    })}
                    />
                    <FormButton type='submit'><div>Enviar</div><IoIosArrowForward /></FormButton>
                    {errors.mensaje?.type === 'required'}
                </Form>
            </FormContent>
        </FormWrapper>
    </Container>
    </>
  )
}

export default Contacto