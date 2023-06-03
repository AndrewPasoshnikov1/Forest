import './App.css'
import React from 'react';
import MyImage from './public/MyImage.jpg';
import MyLogo from './public/Logo.png';
import MyLogoOnPage from './public/Black_and_White.png';

function App() {
  return (
    <main className="app">   
        <div className="navbar">
          <img src={MyLogoOnPage} alt="Фото" className="MyLogoOnPage" />
            <div className="buttoncase">
              <a href="#">Projects</a>
              <a href="#">Let`s Connect</a>
            </div>
        </div>
        <div className="container">
          <div className="text">
                <a href="#">
                  SOFTWARE DEVELOPERS
                </a>
                <h1>
                  Hi! I’m Andrew Pasoshnikov
                </h1>
             
                  <p className='header-text'>
                  I help build and design 
                  products for startups.
                  </p>
               
                <div className="buttoncase2">
                  <button className='button-black'>SEE MY WORK</button>
                  <button className="button-white">Let`s Connect</button>       
                </div>
          </div>
          <img src={MyImage} alt="Фото" className="Logo" />
        </div>

        <div className='Сontainer_for_text'>
              <p className='Text_about_me'>
               I’m a software developer and tech startup enthusiast that has a deep desire to build and launch digital products — always striving to maintain a strong growth mindset accompanied by user-centric designs and a problem-solving approach.
              </p>
              <p className='Text_about_me_'>
                Throughout my career, I’ve written code to craft experiences and designed on 
                the side to understand the human in these applications.
              </p>
        </div>    
        
        <div className='container_INDUSTRY_KNOWLEDGE'>
          <a href="#">INDUSTRY KNOWLEDGE</a>
          <h2>Technical skill set</h2>
          <p>During my early years as a developer, I tend to learn things horizontally, picking up bits and pieces of knowledge but at some point in my career I realized that specializing on a single tech or two while keeping myself up to date with the upcoming ones is more efficient.
          </p>
        </div>

        <div className='Experience'>
          <ul className='list'>
            <li> HTML / CSS 5 years </li>
            <li> Ruby and Ruby on Rails • 2 years </li>
            <li> User Interface Design • 5 years </li>
            <li> JavaScript • 3 years </li>
            <li> PHP and Laravel • 3 years </li>
          </ul>
        </div>

    </main>
  ) 
}

export default App
