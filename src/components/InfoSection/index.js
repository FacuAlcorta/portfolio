import React from 'react'
import { InfoContainer, InfoWrapper, PersonalInfoWrap, PersonalImg, PersonalInfo, PersonalinfoTitle, PersonalInfoText, CoursesInfoWrap, CoursesImg, CoursesInfo, CoursesInfoTitle, CoursesInfoText } from './InfoSectionElements'
import ImgPhoto from '../../images/foto-circular.png'
import ImgCertificate from '../../images/certificado-circular.png'


const InfoSection = () => {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <PersonalInfoWrap>
                    <PersonalImg src={ImgPhoto}/>
                    <PersonalInfo>
                        <PersonalinfoTitle>

                        </PersonalinfoTitle>
                        <PersonalInfoText>

                        </PersonalInfoText>
                    </PersonalInfo>
                </PersonalInfoWrap>
                <CoursesInfoWrap>
                    <CoursesImg src={ImgCertificate}/>
                    <CoursesInfo>
                        <CoursesInfoTitle>

                        </CoursesInfoTitle>
                        <CoursesInfoText>

                        </CoursesInfoText>
                    </CoursesInfo>
                </CoursesInfoWrap>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection