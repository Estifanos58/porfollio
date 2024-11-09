import './services.scss'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    }, 
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    }
}

function Services() {
  return (
    <motion.div className='services' variants={variants} initial='initial' whileInView = 'animate'>
        <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on helping your brand grow 
                <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                 <img src="/portfolio.jpg" alt="" />
                 <h1>
                    <motion.b whileHover={{color:'orange', cursor: 'pointer'}}>Hello!</motion.b> I'am 
                 </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:'orange', cursor: 'pointer'}}>Estifanos, </motion.b> 
                </h1>
                
            </div>
        </motion.div>
        <motion.div className="text" variants={variants}>
            <h2> a third-year Electrical and Computer Engineering student at Addis Ababa University with a passion for web development. I’ve self-taught myself the skills necessary to work with the MERN stack, completing over five projects.</h2>
        </motion.div>
        <button>Download CV</button>
    </motion.div>
  )
}

export default Services