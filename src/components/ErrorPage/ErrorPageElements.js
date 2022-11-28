import React from 'react'
import Img from '../../images/error-page.png'
import { ErrorContainerWrap, ErrorBg, ErrorWrapper, ErrorText } from '../ErrorPage'

const ErrorPage = () => {
  return (
    <>
        <ErrorContainerWrap>
            <ErrorWrapper>
                <ErrorText>
                Ups! La página no existe :D
                </ErrorText>
            </ErrorWrapper>
            <ErrorBg src={Img}/>
        </ErrorContainerWrap>
    </>
  )
}

export default ErrorPage
