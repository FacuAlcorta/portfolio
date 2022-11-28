import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrapper, ImgWrap, Img, Link, LinkS} from './AboutElements'
import { Button } from '../ButtonElements';

export const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {

    
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
                            <Button>
                            <Link to="/contacto">
                            {buttonLabel}
                            </Link>
                            </Button>
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


export const AboutSection1 = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
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
                              <Button onClick={()=> window.scrollTo({top: 0, left: 0})}>                        
                              <LinkS to="services"
<<<<<<< HEAD
                                spy={true}
                                exact={true}
=======
>>>>>>> 0287efc (Agregado de flipcard y video en contacto)
                              >
                              {buttonLabel}
                              </LinkS>                              
                              </Button>
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

  export const AboutSection2 = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
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
                            <Button>
                            {buttonLabel}
                            </Button>
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