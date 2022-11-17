import React, {useState} from 'react'
import { LoopContainer, LoopBg, VideoBg, LoopContent, LoopH1, LoopP, LoopBtnWrapper, ArrowFrd, ArrowRgt } from './VideoLoopElements'
import { Button } from '../ButtonElement'
import Video from '../../video/video.mp4'

const VideoLoop = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <LoopContainer>
        <LoopBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </LoopBg>
        <LoopContent>
            <LoopH1>Soluciones digitales</LoopH1>
            <LoopP>A la medida de cada cliente.</LoopP>
            <LoopBtnWrapper>
                <Button to="contacto" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Asesorate hoy mismo {hover ? <ArrowFrd /> : <ArrowRgt />}
                </Button>
            </LoopBtnWrapper>
        </LoopContent>
    </LoopContainer>
  )
}

export default VideoLoop