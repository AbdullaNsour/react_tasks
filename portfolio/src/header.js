import React from 'react'




function header() {
  return (
    <div class="header">
  <header>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand px-5 fs-2" href="index.html">an_nsour</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end px-5" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link fs-5" href="#about">About me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5" href="Portfolio.html" >Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5" href="Contact.html"  >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}


export default header