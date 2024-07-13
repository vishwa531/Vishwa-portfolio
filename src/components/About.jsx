import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Tailor Vishwa, a 2024 graduate🎓 I am a passionate front-end developer dedicated to crafting user-friendly experiences with a keen eye for detail and usability. Translating UI/UX designs into responsive, interactive features, I thrive on bringing mockups to life. My expertise lies in HTML, CSS, and JavaScript, complemented by a solid understanding of modern libraries and frameworks like React.js, Vue.js and Angular. <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/nithin-manda-728019214/' target='_blank'> Software developer</a> I specialize in Front-end Developer. 
          <br/>
          ✍️ Throughout my career, I've collaborated with designers and back-end developers to create seamless interfaces that enhance user satisfaction. I am adept at optimizing applications for maximum speed and scalability while ensuring cross-browser compatibility. My commitment to clean, maintainable code allows for easy troubleshooting and future enhancements.
          On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.</p>

          <ButtonLink
            url='https://docs.google.com/document/d/14H0FDivvmYsD8k9MIAPx4qi-9l4JXS4HrrlmE0gYGE4/edit?usp=sharing'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;