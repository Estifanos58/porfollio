import { useTypewriter, Cursor } from "use-typewriter-hook"
import photo_1  from '../assets/IMG_20240309_181304_597.jpg'
function Hero() {
    const targetText = "Hey ! I'am Estifanos a Full Stack Web Developer Based in Ethiopia";
    const { textValue: typedText, wrapperClassName } = useTypewriter({
      targetText: targetText,
      typingDelayMillis: 100,
    });
  return (
    <div className="hero">
        <div className="hero-left" >
            <span style={{fontSize:'100px', textAlign:'center'}}>
                {typedText}
            </span>    
        </div>
        <div className="hero-right">
                <img src={photo_1} alt="" />
        </div>
    </div>
  )
}

export default Hero