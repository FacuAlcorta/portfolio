import React from 'react'
import Img from '../../images/error-page.png'
import { ErrorContainerWrap, ErrorBg, ErrorWrapper, ErrorText } from '.'

const ErrorPage = () => {
  return (
    <>
        <ErrorContainerWrap>
            <ErrorBg src={Img}/>
            <ErrorWrapper>
                <ErrorText>
                Ups! La página no existe :D
                </ErrorText>
            </ErrorWrapper>
        </ErrorContainerWrap>
    </>
  )
}

export default ErrorPage