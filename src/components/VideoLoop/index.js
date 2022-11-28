import React, {useState} from 'react'
import { LoopContainer, LoopBg, VideoBg, LoopContent, LoopH1, LoopP, LoopBtnWrapper, Link, ArrowFrd, ArrowRgt } from './VideoLoopElements'
import { Button } from '../ButtonElements'
import Video from '../../video/coding-video.mp4'

const VideoLoop = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <LoopContainer id="/">
        <LoopBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </LoopBg>
        <LoopContent>
            <LoopH1>Soluciones digitales</LoopH1>
            <LoopP>A la medida de cada cliente.</LoopP>
            <LoopBtnWrapper>
                <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                    <Link to="/contacto">
                    Asesorate hoy mismo {hover ? <ArrowFrd /> : <ArrowRgt />}
                    </Link>
                </Button>
            </LoopBtnWrapper>
        </LoopContent>
    </LoopContainer>
  )
}

export default VideoLoop