import './Navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  return (
    <div className='navbar'>
         <Sidebar/> 
        <div className="wrapper">
          <motion.span
            initial={{opacity:0 , scale: 0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration: 0.5}}   
          >Estifanos Kebede</motion.span>
          <div className="social">
            <a href="#" title='facebook'><img src="/facebook.png"/></a>
            <a href="#" title='instagram'><img src="/instagram.png"/></a>
            <a href="#" title='youtube'><img src="/youtube.png"/></a>
            <a href="#" title='dribble'><img src="/dribbble.png"/></a>
          </div>
        </div>
    </div>
  )
}

export default Navbar