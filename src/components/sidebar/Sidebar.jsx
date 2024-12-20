import { useState, useEffect } from 'react';
import Links from './links/Links';
import './Sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
    },
    final : {
        opacity: 1,
        trasition: {
            duration: 0.5
        }
    },
    open: {
        clipPath: 'circle(1200px at 50px 50px)',
        transition: {
            type: 'spring',
            stiffness: 20,
        }
    },
    closed: {
        clipPath: 'circle(30px at 50px 50px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        }
    },
};

function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants} >
                <Links />
            </motion.div>
            <ToggleButton open={open} setOpen={() => setOpen(prev => !prev)} />
        </motion.div>
    );
}

export default Sidebar;
