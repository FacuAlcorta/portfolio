import React from 'react'
import { Container, FormContent, Form, FormH1, FormInput, FormLabel, FormWrapper, NavLogo, FormInputText, FormButton } from './ContactoElements'
import { ImgLogo } from '../Navbar/NavbarElements';
import { IoMdPaper, IoMdAt, IoIosContact, IoIosArrowForward } from "react-icons/io";

const Contacto = () => {
  return (
    <>
    <Container>
        <FormWrapper>
            <NavLogo to="/"offset={-80}><ImgLogo src={require(`../../images/marca-png.png`)}/></NavLogo>
            <FormContent>
                <Form>
                    <FormH1>Contactame</FormH1>
                    <FormLabel>Nombre Completo <IoIosContact/></FormLabel>
                    <FormInput type='text'/>
                    <FormLabel><div>Email</div><IoMdAt/></FormLabel>
                    <FormInput type='email'/>
                    <FormLabel><div>Ingresá tu mensaje</div><IoMdPaper/></FormLabel>
                    <FormInputText type='text' maxLength={450}/>
                    <FormButton type='submit'><div>Enviar</div><IoIosArrowForward /></FormButton>
                </Form>
            </FormContent>
        </FormWrapper>
    </Container>
    </>
  )
}

export default Contacto