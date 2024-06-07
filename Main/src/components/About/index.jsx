import { useState } from 'react';
// import { motion } from 'framer-motion';
// import AboutImg from '../../assets/images'
// import Skills from '../Skills';

const About = () => {
  return (
    <section id="about" className="container">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.div
        className='w-full flex flex-col md:flex-row justify-center items-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <div className='flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0 opacity-60 hover:opacity-100  transition-all ease-in duration-300'>
          <img
            src={AboutImg}
            className='shadow-lg rounded-full'
            alt="Hi, I'm LoRa!"
          />
        </div>
        <div>


          <p className='mb-5'>
            My interest List<br />
            1.
            2.
            3.

          </p>
          {/* <p className='mb-5'>
            My Skills<br />
            <Skills />
            <a href="/" target="_blank" rel="noreferrer"
              href='https:reference.com'
              target='_blank'
              className='about'
              aria-label='Example'
            >
              local business
            </a>{' '}
            what i did
            <a href="/" target="_blank" rel="noreferrer"
              href='https:reference.com'
              target='_blank'
              className='about'
              aria-label='Example'
            >
              local business
            </a>{' '}
            what i did
          </p>
          <p>
            When im not coding, I enjoy "blank and blank" <br />
            im also a "blank" and "blank"
          </p> */}
        </div>
      </motion.div>

      <motion.h2
        className='mt-12'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <motion.div
        className='w-full sm:w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.25 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>
    </section>
  );

};

// const [edit, setEdit] = useState({
//   id: null,
//   value: '',
//   eagerness: '',
// });

// console.log(props.bucket);

// const submitUpdate = (value) => {
//   props.editBucketItem(edit.id, value);
//   setEdit({ id: null, value: '', eagerness: '' });
// };

// if (edit.id) {
//   return <BucketForm edit={edit} onSubmit={submitUpdate} />;
// }

// return props.bucket.map((item, i) => (
//   <div
//     className={
//       item.isComplete
//         ? `bucket-row complete ${item.eagerness}`
//         : `bucket-row ${item.eagerness}`
//     }
//     key={i}
//   >
//     <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
//       {item.text}
//     </div>
//     <div className="icons">
//       {console.log(item)}
//       <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
//       <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
//     </div>
//   </div>
// ));

export default About;
