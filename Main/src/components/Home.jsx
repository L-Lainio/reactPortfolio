// import { motion } from 'framer-motion';
// import HyperLink from './HyperLink';
import Button from './Button';

const Home = () => {
    return (
        <section
            id='main'
            className='max-w-screen-md m-auto px-8 w-full h-screen flex flex-col justify-center items-start'
        >
            <div>

                I am a full-stack web developer living in Florida with a passion for
                technologies. I enjoy creating and designing various projects, such as{' '}
                <a
                    href='https://github.com/L-Lainio'
                    target='_blank'
                    className='home'
                    aria-label='Visit my GitHub!'
                >
                    web applications
                </a>
                , {/* <HyperLink> */}

                {/* </HyperLink> */}.
            </div>
            <motion.div
                className='w-full flex items-center justify-between'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                viewport={{ once: true }}
            >
                <a
                    // href='/Lora-Lainio-CV.pdf'
                    // aria-label='View my resume'
                >
                    <Button>Download CV</Button>
                </a>
            </motion.div>
        </section>
    );
};

export default Home;
