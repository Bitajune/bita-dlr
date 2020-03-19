import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import img from '../assets/images/img.png';
import eat from '../assets/images/eat.png';
import postman from '../assets/images/postman.png';
import cups from '../assets/images/cups.png';
import war from '../assets/images/war.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <h1 className="bio">I am a manager, teacher, and magician who found her home in Software Development with a love for Front-End Development and CSS. Having to wear multiple hats throughout my career, I love the challenge of juggling multiple assignments at once while always keeping an eye on time management to make sure everything is completed on-time. I also thrive working in a team environment as I love to meet new people while working together to achieve our goals.</h1>
          <h1 className="bio">Something that I value in a company and my own work ethic is the mentality to always be passionate about what you’re working on and pushing oneself to continue to learn. As a former teacher, I am drawn to the idea of always learning and always growing as well as communicating with others in a respectful way to get the job done. I feel that software engineering follows a similar method of problem-solving that comes with teaching as it comes down to a really good problem-solving strategy. All the languages are secondary to just being a really good problem solver.</h1>
        </div>
        <img src={img} className="bioImg" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <br></br>
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={eat} alt="" />
        </div>
        <div className="col-lg-6">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-black">Of The Rose</h4>
              <p className="text-black-50 mb-0">
                Welcome to Of The Rose. A place for people to come and find things that make their world a little brighter. Here you can search for florists, bars, and restaurants in your city through both Yelp and Google Maps API. Made using React, Firebase, and CSS.
                <br></br>
                <a target="_blank" href="https://github.com/Bitajune/of-the-rose">Github</a>
              </p>
              <hr className="d-none d-lg-block mb-0 ml-0" />
            </div>
          </div>
        </div>
      </div>
      <br></br>


      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={postman} alt="" />
        </div>
        <div className="col-lg-6">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-black">Postman</h4>
              <p className="mb-0 text-black-50">
                With Google OAuth, users will have access to find centers that aid people in need. Made using Node.JS, MongoDB, Mongoose, JavaScript, and CSS.
                  <br></br>
                <a target="_blank" href="https://github.com/Bitajune/postman">Github</a>
              </p>
              <hr className="d-none d-lg-block mb-0 ml-0" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={cups} alt="" />
        </div>
        <div className="col-lg-6">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-black">Red Cup Games</h4>
              <p className="mb-0 text-black-50">
                A message board for people to post about their drinking games or find new ones from other users or use the chat room to talk to people directly. Made with Django, Python, and AWS.
                  <br></br>
                <a target="_blank" href="https://github.com/Bitajune/red-cup-games">Github</a>
              </p>
              <hr className="d-none d-lg-block mb-0 ml-0" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={war} alt="" />
        </div>
        <div className="col-lg-6">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-black">War</h4>
              <p className="mb-0 text-black-50">
                A western twist on the traditional card game War. Made using JavaScript, CSS, and HTML.
                  <br></br>
                <a target="_blank" href="https://github.com/Bitajune/war">Github</a>
              </p>
              <hr className="d-none d-lg-block mb-0 ml-0" />
            </div>
          </div>
        </div>
      </div>
    </section>



    <SocialLinks />
    <Footer />
  </Layout >
);

export default IndexPage;
