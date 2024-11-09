import './hero.scss'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from "use-typewriter-hook"

const textVariants =  {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration:2,
            repeat: Infinity
        }
    }
}

const sliderVariants =  {
    initial: {
        x: 0,
    },
    animate: {
        x:'-220%',
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration:20,
        },
    },
}

function Hero() {

    const targetText = "Full Stack Web Developer Based in Ethiopia";
    const { textValue: typedText, wrapperClassName } = useTypewriter({
      targetText: targetText,
      typingDelayMillis: 100,
      autoStartDelay: 2
    });


  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                <motion.h2 variants={textVariants}>Estifanos Kebede</motion.h2>
                <motion.h1 variants={textVariants}>{typedText}</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}><a href='#portfolio'>See the Latest Works</a></motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'> 
            Full Stack Web Developer
        </motion.div>
    </div>
  )
}

export default Hero