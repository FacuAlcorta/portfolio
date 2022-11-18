import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrapper, ImgWrap, Img} from './AboutElements'
import { Button } from '../ButtonElements';

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                            {topLine}
                        </TopLine>
                        <Heading lightText={lightText}>
                            {headline}
                        </Heading>
                        <Subtitle darkText={darkText}>
                            {description}
                        </Subtitle>
                        <BtnWrapper>
                            <Button to='home' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            >{buttonLabel}</Button>
                        </BtnWrapper>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default AboutSection