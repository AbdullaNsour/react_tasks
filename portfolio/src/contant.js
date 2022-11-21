import React from 'react'
import Prop1 from'./contant';



function contant(props) {
  return (
    
    <div>
        <section class="profile">
        <h2> I'm {props.name} Nsour <span> Front-End Developer </span></h2>
        {/* <h3> & Digital Artist</h3> */}
        <a href="Portfolio.html" class="portfolio"> View Projects </a>
        <img class="img1" src="Image/Abdulla Center 2.jpg" alt=""/>
        <div class="social-icon">
          <br/>
        <a href="#Github"><i class="fa-brands fa-square-github"></i></a>
        <a href="#Linked in"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#instagram"><i class="fa-brands fa-square-instagram"></i></a>
        </div>

        </section>

        <section class="work" id="project">
    <h2 class="service_tital"> Services</h2>
    <div class="all">

    
    <div class="cards">
      <div class="icon">
        <i class="fa-solid fa-palette"></i>
      </div>
      <div class="info">
        <h3>Digital Art</h3>
        <p>this is the best practice for digital art, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
    <div class="cards">
      <div class="icon">
        <i class="fa-solid fa-file-code"></i>
      </div>
      <div class="info">
        <h3> Web Developer</h3>
        <p>this is the best practice for Web Developer, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
  </div>
  </section>


  <section class="work" id="idskills">
    <h2 class="service_tital">Skills</h2>
    <div class="all">

    
    <div class="skills_cards">
      <div class="icon">
        <i class="fa-solid fa-palette"></i>
      </div>
      <div class="info">
        <h3>Designer</h3>
        <p>this is the best practice for digital art, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
    <div class="skills_cards">
      <div class="icon">
        <i class="fa-brands fa-bootstrap"></i>
      </div>
      <div class="info">
        <h3>Bootstrap</h3>
        <p>this is the best practice for digital art, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
    <div class="skills_cards">
      <div class="icon">
        <i class="fa-solid fa-file-code"></i>
      </div>
      <div class="info">
        <h3>HTML 5</h3>
        <p>this is the best practice for digital art, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
    <div class="skills_cards">
      <div class="icon">
        <i class="fa-brands fa-css3-alt"></i>
      </div>
      <div class="info">
        <h3> Css 3</h3>
        <p>this is the best practice for Web Developer, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
  </div>
  </section>


  <section class="work" id="u_jordan">
    <h2 class="service_tital">Education</h2>
    <div class="all">

    <div class="cards">
      <div class="icon">
        <i class="fa-solid fa-building-columns"></i>
      </div>
      <div class="info">
        <h3> Risk Management & Insurance</h3>
        <p>this is the best practice for Web Developer, you can find here some of my projects hope you enjoy with it. </p>
      </div>
    </div>
  </div>
  </section>
    </div>

  )
}

export default contant