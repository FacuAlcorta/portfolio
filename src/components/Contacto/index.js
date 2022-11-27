import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Container, FormContent, Form, FormH1, FormInput, FormLabel, FormWrapper, NavLogo, FormInputText, FormButton } from './ContactoElements'
import { ImgLogo } from '../Navbar/NavbarElements';
import { IoMdPaper, IoMdAt, IoIosContact, IoIosArrowForward } from "react-icons/io";
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'


const Contacto = () => {

    
    const form = useRef();
    
    const {register, formState: { errors }, handleSubmit } = useForm();

    const sendEmail = () => {

    emailjs.sendForm(
        'service_qffggzl', 
        'template_xxmdoyf', 
        form.current, 
        'fDDcY9y51RcnkIxof')
      .then(() => {
        Swal.fire({
            title: 'Enviado',
            text: 'Tu consulta se envió correctamente',
            icon: 'success',
            confirmButtonText: 'OK'
          })
      }, () => {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un inconveniente al intentar enviar tu consulta, intentalo de nuevo en unos instantes.',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
      });
  }

  

  return (
    <>
    <Container>
        <FormWrapper>
            <NavLogo to="/" offset={-80}><ImgLogo src={require(`../../images/marca-png.png`)}/></NavLogo>
            <FormContent>
                <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <FormH1>Contactame</FormH1>
                    <FormLabel>Nombre Completo <IoIosContact/></FormLabel>
                    <FormInput type='text' maxLength={25} {...register('user_name', {
                    required: true
                    })}
                    />
                    {errors.nombre?.type === 'required'}
                    <FormLabel><div>Email</div><IoMdAt/></FormLabel>
                    <FormInput type='email' {...register('user_email', {
                    required: true
                    })}
                    />
                    {errors.email?.type === 'required'}
                    <FormLabel><div>Ingresá tu mensaje</div><IoMdPaper/></FormLabel>
                    <FormInputText type='text' maxLength={450} {...register('message', {
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