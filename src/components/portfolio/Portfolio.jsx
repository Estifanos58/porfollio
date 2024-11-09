import './portfolio.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: 'React Commerce',
        img: "/react.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quibusdam itaque voluptas, quis eligendi sapiente mollitia reprehenderit vitae possimus pariatur quidem asperiores, aspernatur accusamus sunt nesciunt facere natus, eius alias?"
    },
    {
        id: 2,
        title: 'Next.js ',
        img: "/next.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quibusdam itaque voluptas, quis eligendi sapiente mollitia reprehenderit vitae possimus pariatur quidem asperiores, aspernatur accusamus sunt nesciunt facere natus, eius alias?"
    },
    {
        id: 3,
        title: 'Vanilla Js App',
        img: "/vanilla.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quibusdam itaque voluptas, quis eligendi sapiente mollitia reprehenderit vitae possimus pariatur quidem asperiores, aspernatur accusamus sunt nesciunt facere natus, eius alias?"
    },
    {
        id: 4,
        title: 'Music App',
        img: "/people.webp",
        desc: "Lorem ipsum dolor  sit amet consectetur, adipisicing elit. Obcaecati quibusdam itaque voluptas, quis eligendi sapiente mollitia reprehenderit vitae possimus pariatur quidem asperiores, aspernatur accusamus sunt nesciunt facere natus, eius alias?"
    }
]

const Single = ({item}) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-100, 100]);
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>     
            </div>
        </section>
    )
}

function Portfolio() {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target:ref, 
        offset:["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio