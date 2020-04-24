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
import react from '../assets/images/react.png';
import js from '../assets/images/javascript.png';
import aws from '../assets/images/AWS.png';
import css from '../assets/images/CSS.png';
import django from '../assets/images/Django.png';
import firebase from '../assets/images/Firebase.png';
import github from '../assets/images/github.png';
import heroku from '../assets/images/Heroku.png';
import html from '../assets/images/HTML.png';
import node from '../assets/images/node.png';
import python from '../assets/images/python.png';
import sql from '../assets/images/SQL.png';
import vscode from '../assets/images/VSCODE.png';

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
          <h1 className="bio">I am a manager, teacher, and magician who found her home in Software Development with a love for Front-End design and CSS. I thrive working in a team environment as I love to meet new people while working together to achieve our goals. As a teacher I understand the importance of always learning and always growing, and I apply that to my work ethic. My eagerness to learn and create has helped me with web development and has given me the tools to work on projects that I am passionate about.</h1>
        </div>
        <img src={img} className="bioImg" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
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
      </div>
    </section>



    <SocialLinks />
    <Footer />
  </Layout >
);

export default IndexPage;
